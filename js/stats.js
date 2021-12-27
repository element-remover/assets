// Array of Objects to object
const aob = arr => (obj = {}, (arr.map(e => (i = Object.keys(e)[0], obj[i] = e[i])), obj)),
  sort = (arr, key) => arr.sort((a, b) => key ? a[key] - b[key] : a - b),
  $ws = el => window.getComputedStyle($(el)),
  $tm = (e, i = -1) => {
    let [w, mo, d, yr, t] = new Date(e).toString().match(/\S+/g),
      [h, m] = t.match(/\d+(?=:)/g),
      des = [h, w, mo, yr, m, d];
    return i != -1 ? des[i] : des
  },
  $cs = {
    init: function(e) {
      let area = $(e);
      this.el = e
      this.e = area
      this.c = area.getContext("2d")
      this.e.width = this.width
      this.e.height = this.height
    },
    area: function(x, y) {
      this.width = x
      this.height = y
    },
    clean: function() {
      this.e.onmousemove = () => {}
      this.c.clearRect(0, 0, this.e.width, this.e.height);
    },
    text: function(t, x, y) {
      this.c.fillText(t, x, y)
    },
    line: function(x, y, ex, ey) {
      this.c.beginPath(x, y)
      this.c.moveTo(x, y);
      this.c.lineTo(x, y);
      this.c.lineTo(ex, ey);
      this.c.stroke()
    },
    props: function(co, w, d = 0, g = 0) {
      this.c.setLineDash([d, g]);
      this.c.strokeStyle = co;
      this.c.lineWidth = w
    },
    font: function(w, s = 16, a = 0) {
      this.c.font = "normal " + w + " " + s + "px sans-serif";
      this.c.textAlign = !a ? "center" : a == 1 ? "right" : "left";
      this.c.textBaseline = "middle"
    },
    point: function(x, y, co, s) {
      this.c.beginPath(x, y);
      this.c.fillStyle = co
      this.c.arc(x, y, s, 0, 180, false);
      this.c.fill();
    }
  };

let boxTop = 1;

//App function
const design = {
  stats: {},
  selectedArr: [],
  keys: ["day", "week", "month", "year", "all"],
  dates: [0, 5184e5, 24192e5, 31536e6, 31536e6 * 6].map(e => new Date().setHours(0, 0, 0, 0) - e),
  init: function(obj) {
    let arr = obj.day,
      webs = obj.counter || [],
      cors = obj.counter || ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'];

    if (!arr.length) {
      return 0;
    }

    arr = arr.map(e => ((e.stay = (e.end - e.begin) / 1000) | delete e.end | (e.at = e.begin) | delete e.begin | (m = e.mes, e.mes = m == "Storage" ? 2 : 0), e))
    console.log(arr);

    arr = arr.map(e => (w = e.web, (i = webs.indexOf(w), e.web = i != -1 ? i : (webs.push(w), webs.length - 1)), e))
    arr = arr.map(e => (c = e.cor, (i = cors.indexOf(c), e.cor = i != -1 ? i : (cors.push(c), cors.length - 1)), e))
    ads = arr.map(e => e.seenAds).reduce((a, b) => a + b)

    // For Staying Time
    let webs1 = JSON.parse(JSON.stringify(arr)).map(e => (e.at = new Date(e.at).setHours(0, 0, 0, 0), e))
    webs = webs.map((w, wi) => (warr = webs1.filter(e => e.web == wi), {
      site: w,
      stay: aob([...new Set(warr.map(e => e.at))].map(te => (ft = warr.filter(e => e.at == te), {
        [te]: ft.map(e => e.stay).reduce((a, b) => a + b)
      })))
    }))
    console.log(webs)


    // For Dividing the Items
    function wd(arr, dur = 0) {
      function res(e) {
        v = [2, 5, 1, 3, 6][dur];
        return dur <= 2 ? e.setMinutes(Math.round(e.getMinutes() / v) * v, 0, 0) :
          ((dur == 5 || dur == 4) && e.setDate(Math.round(e.getDate() / v) * v), e.setHours(0, 0, 0, 0));
      }
      let temp = JSON.parse(JSON.stringify(arr)).map(e => (e.at = res(new Date(e.at)), e));

      return [...new Set(temp.map(e => e.at))].map(te => (ft = temp.filter(e => e.at == te), {
        at: te,
        ad: ft.map(e => e.ad).reduce((a, b) => a + b),
        seenAds: ft.map(e => e.seenAds).reduce((a, b) => a + b),
        web: ft.map(e => e.web),
        cor: ft.map(e => e.cor)
      }))
    }

    let sObj = aob(this.dates.map((t, i) => {
      console.log(arr.filter(e => e.at >= t), i, t)
      let karr = wd(arr.filter(e => e.at >= t), i);
      arr = arr.filter(e => e.at < t)
      return {
        [this.keys[i]]: karr
      }
    }))

    sObj.counter = {
      webs: webs,
      cors: cors,
      ads: ads
    }

    this.stats = sObj
    this.events();
    $('.bh .bi').click()
  },
  events: async function() {
    // Completed the Dividing the Items
    console.log("Statistics Details : ", this.stats)
    const statsCounter = obj => Object.keys(obj).map((k, i) => $(`.bh .bi:nth-child(${i + 1}) .bk`).innerText = (ar = obj[k], typeof ar === 'number' ? obj[k] : obj[k].length))
    evt("#n" + 'ag', "click", () => statsCounter(this.stats.counter));

    ['bi', 'bv', 'bn'].map(e => this[e] = 0);

    ['.bh .bi', '.bl .bu .bv', '.bl .bm .bn'].map((b, i) =>
      $Arr(b).forEach(e => evt(e, "click", evt => {
        let el = evt.target;
        cl(`${b}.bj`, 'bj', 0);
        cl(el, 'bj');
        let va = Array.from(el.parentNode.children).indexOf(el),
          key = ['bi', 'bv', 'bn'][i];
        if (this[key] != va) {
          this[key] = Array.from(el.parentNode.children).indexOf(el)
          this.canvas(this['bi'], this['bv'], this['bn'])
        }
      }))
    )
    await new Promise(r => setTimeout(() => cl('#ag .i .ao', 'fw', 0) | $('#ag .fx').remove() | r(), 0e3))
    $("#n" + 'ag').click()
    this.canvas(this['bi'], this['bv'], this['bn'])
  },
  canvas: async function(which = 0, dur = 0, who = 0) {
    let arr = this.stats[this.keys[dur]],
      lines = 3;
    console.log(which, arr, who);
    // draw(arr, 3, time, which)

    let fx = $('.bo').clientWidth * 1.5,
      fy = $('.bo').clientHeight * 1.5,
      g = fy * 0.15,
      hg = g / 2,
      hhg = hg / 2,
      mx, my,
      per = fx;
    $cs.area(fx, fy);

    console.log(dur, arr);

    pointerLine('#bq', await graph('#bp', arr, g, lines, dur), g)

    function wts(arr, dur) {
      let carr = JSON.parse(JSON.stringify(arr)).map(e => new Date(e)).map(e => {
          switch (e) {
            case 4:
              e.setMonth(0)
            case 3:
              e.setDate(1)
            case 2:
              e.setHours(0, 0, 0, 0)
          }
          return e.setMinutes(0, 0, 0)
        }),
        tc = [...new Set(carr)].map(te => {
          return {
            time: $tm(te, dur),
            count: carr.filter(e => e == te).length
          }
        })

      console.log(tc)

      return sort([...new Set(tc.map(e => e.time))].map(t => ("", {
        time: t,
        count: tc.filter(e => e.time == t).map(e => e.count).reduce((a, b) => a + b)
      })), "count").reverse().splice(0, [3, 5, 21, 12, 7][dur])
    }

    async function graph(canvas, svdarr, g, len = 1, dur = 0) {
      let x = g,
        y = g,
        ex = mx = fx - g,
        ey = my = fy - g;
      boxTop = 1
      $cs.init(canvas);
      $cs.clean()

      if (svdarr.length >= 2) {
        per /= parseFloat($ws($(canvas)).width);

        // console.log(g, ex, ey, fx, fy, canvas.width, $ws(canvas).width, )

        m = len * 5;
        $cs.c.fillStyle = "rgba(255,255,255,0.4)";
        $cs.font("bold", 16, 1);

        if (svdarr) {
          // Y lines
          let count = svdarr.map(e => e.web.length),
            max = Math.ceil((sort([...count]).reverse()[0]) / m) * m,
            sy = y - ey,
            ygap = max / len,
            yinc = sy / len;

          $cs.props("rgba(255, 255, 255, 0.2)", 1, 9, 13);

          [...Array(len + 1).keys()].map((e, i) => {
            let ty = ey + yinc * i

            gi = 2
            t = Math.round(ygap * i);
            $cs.text(t, x - 25, ty);
            $cs.line(x, ty, ex, ty);
          })

          // X Points
          const time = sort(svdarr.map(e => e.at)),
            xinc = (ex - x) / (time.length - 1),
            arr = [];

          let show = wts(time, dur);
          console.log("Display Name :", show);

          (ix = [1, 2, 3, 4, 5].indexOf(dur), ix >= 0 && (show = show.length > ix ? show.filter((e, i) => i % [1, 2, 7, 3][ix] == 0) : show))

          $cs.font("bold", 16, 0);
          time.map((e, i) => {
            let obj = {
              x: x + (xinc * i),
              y: ey - (((ey - y) * (count[i] / max))),
              c: count[i]
            }

            let [h, w, mo, yr, m, d] = $tm(e),
              save = [h, w, d, mo, yr][dur], dis;

            show.filter((e, i) => e.time == save && show.splice(i, 1) | (dis = true));

            // For AM/PM
            ap = h > 11 ? ((h == 12 ? h : h -= 12) | (h < 10 && (h = "0" + h)), "PM") : "AM"
            obj.t = dur <= 2 ? `${dur == 2 ? `${w} ` :""}${h}:${m} ${ap}` : `${mo} ${d}${dur > 3 ?`, ${yr}` : ""}`

            // console.log(save, dis, btext, h);
            // Display Bottom Time | Day | Date | Month
            dis && $cs.text([`${h}:00 ${ap}`, w, `${mo} ${d}`, `${mo} ${yr}`, yr][dur], obj.x == g ? obj.x + hhg : obj.x == mx ? obj.x - hhg : obj.x, my + 25)
            arr.push(obj);
          });

          $cs.c.lineCap = "round"
          $cs.props("rgba(0, 0, 0, 0.3)");
          if (arr.length > 2) {
            await curve([...arr], "lightgreen", 3);
            return arr;
          }
        } else {
          errorData("More Data Needed to Show Stats");
        }
      } else {
        errorData("Not Enough Data to Show Stats");
      }

      function errorData(tx) {
        $cs.c.fillStyle = "rgba(255,255,255,0.3)";
        $cs.font("500", 24, 0);
        $cs.text(tx, (ex + x) / 2, (ey + y) / 2);
      }
      return []
    }

    async function curve(points, color, width) {
      const mid = (p1, p2) => ("", {
        x: (p2.x + p1.x) / 2,
        y: (p2.y + p1.y) / 2
      })

      let narr = [points[0]];

      points.map((e, i) => {
        let n = points[i + 1];
        if (n) {
          let res = [];
          // [0].map(_ => res.push(mid((r = res[res.length - 1], r ? r : e), n)))
          narr.push(...[...res, n])
        }
      })

      console.log(narr);

      let arr = narr;
      $cs.c.strokeStyle = color;
      $cs.c.lineWidth = width;
      $cs.c.lineCap = "round"
      $cs.c.beginPath(arr[0].x, arr[0].y)
      $cs.c.moveTo(arr[0].x, arr[0].y);

      // Without Curve
      // arr.map(e => $cs.c.lineTo(e.x, e.y))

      // With Curved Edges
      for (i = 1; i < arr.length - 2; i++) {
        $cs.c.quadraticCurveTo(arr[i].x, arr[i].y, (arr[i].x + arr[i + 1].x) / 2, (arr[i].y + arr[i + 1].y) / 2);
      }

      // Animated Curve
      // for (i = 1; i < arr.length - 2; i++) {
      //   $cs.c.strokeStyle = color;
      //   await new Promise(r => setTimeout(() => $cs.c.quadraticCurveTo(arr[i].x, arr[i].y, (arr[i].x + arr[i + 1].x) / 2, (arr[i].y + arr[i + 1].y) / 2) | r(), 5));
      //   $cs.c.stroke()
      // }

      $cs.c.quadraticCurveTo(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y);
      $cs.c.stroke()
      return true
    }

    function pointerLine(canvas, arr, g) {
      $cs.init(canvas);
      $cs.clean();
      // console.log(arr);

      function whichSide(arr, x) {
        let obj = {
          x: 0,
          y: 0,
          c: 0,
          t: 0
        };
        arr.map((e, i) => {

          let b = arr[i - 1] ? arr[i - 1] : {
              x: g
            },
            f = arr[i + 1] ? arr[i + 1] : {
              x: mx
            };

          if (b.x <= x && x <= e.x) {
            obj = ((b.x + e.x) / 2) <= x ? e : b;
          } else if (e.x <= x && x <= f.x) {
            obj = ((e.x + f) / 2) >= x ? e : f;
          }
        })

        return obj
      }

      $cs.e.onmousemove = function(e) {
        let rect = this.getBoundingClientRect(),
          {
            x,
            y,
            c: v,
            t
          } = whichSide(arr, (e.clientX - rect.left) * per),
          ey = (e.clientY - rect.top) * per;

        $cs.c.clearRect(0, 0, $cs.e.width, $cs.e.height);
        cl('.br', 'bs', 1);

        if (g <= x && x <= mx && g <= ey && ey <= (my + hg)) {
          $cs.props("rgba(255, 255, 255, 0.5)", 2)
          $cs.line(x, g, x, my, 0, 0);
          $cs.point(x, y, "rgba(255, 255, 255, 0.5)", 11)
          $cs.point(x, y, "rgba(150, 255, 150, 1)", 8)
          $cs.font("Normal", 24, 0);
          box(v, t, x, g - g * 0.85);
        }
      }
    }

    function box(v, t, x, y) {
      let box = $('.br'),
        start = g / per,
        end = (fx - g) / per;

      box.querySelector('.bk').innerText = v
      box.querySelector('.bt').innerText = t

      width = Math.abs(parseFloat($ws(box).width) / 2);
      left = (x / per);

      boxTop && (box.style.top = `${(y * per) / 4}px`, boxTop = 0)
      box.style.left = (((left - width) < start) ? width :
        ((left + width) < end) ? left - width : end - width * 2) + "px";

      cl(box, 'bs', 0);
    }
  }
}