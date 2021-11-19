// Statsictics
// UI Data
let drawarr = [],
  lineCount = 3,
  dura = 1;


const arr = {
  create: (len = 5, end = 200, dura = 0) => Array.from({
    length: len
  }, (_, i) => ('', {
    count: parseInt(Math.random() * end) + 2,
    time: arr.random(parseInt(new Date().getTime() - [86400, 86400 * 7, 86400 * 30, 86400 * 365][dura] * 1000), new Date().getTime())
  })),
  random: (start, end) => {
    return new Date(start + Math.random() * (end - start));
  }
}


//App function
const design = {
  stats: {
    day: arr.create(25, 25),
    week: arr.create(105, 200, 1),
    month: arr.create(175, 500, 2),
    year: arr.create(375, 1000, 3),
    all: arr.create(675, 2000, 4)
  },
  init: function(arr){
    console.log(arr, this.stats);
    // this.events();
  },
  events: function () {
    console.log("Statistics Details : ", this.stats)
    evt(".nav button:nth-child(2)", "click", () => [this.stats.website, this.stats.ads, this.stats.colors].map((e, i) => statsCounter(e, i)) |
      $(".snav .block").click());

    function statsCounter(arr, pos) {
      let keys = Object.keys(arr),
        temp = [];
      arr = arr[keys[1]].concat(arr[keys[2]]);

      document.querySelector(`.bk .block:nth-child(${pos + 1}) .bn`).innerText = arr.length > 1 ? [
        [...new Set(arr.map(e => e.host + ">" + e.dir))].length,
        arr.map(a => a.count).reduce((a, b) => a + b, 0),
        (pos == 2 && arr.map(e => temp.push(...e.color)), [...new Set(temp.map(e => e.c))].length)
      ][pos] : 0;
    }

    $Arr('.bk .bl').forEach(e => evt(e, "click", evt => {
      let el = evt.target,
        pos = Array.from(el.parentNode.children).indexOf(el);
      $(`.bk .bl.bm`) && cl(`.bk .bl.bm`, "selected", 0);
      cl(el, "selected");

      if (pos >= 0 && pos < 3) {
        let arr = pos == 0 ? this.stats.website : pos == 1 ? this.stats.ads : this.stats.colors,
          keys = Object.keys(arr);
        drawarr = arr;

        $(".stats .switcher .switch").click();
        $Arr(".stats .divider .divide").forEach((e, i) => i != 1 && (e.innerText = keys[[1, 0, 2][i]]));
      }
    }));

    $Arr('.bo .bx .by').forEach(e => evt(e, "click", evt => {
      let el = evt.target,
        pos = Array.from(el.parentNode.children).indexOf(el);
      $(`.bx .by.bm`) && cl(`.bx .by.bm`, "selected", 0);
      cl(el, "selected");

      pos >= 0 && pos < 5 && (dura = ++pos)
      $(".stats .divider .divide").click();
    }));

    $Arr('.bo .bp .bq').forEach(e => evt(e, "click", evt => {
      let el = evt.target,
        pos = Array.from(el.parentNode.children).indexOf(el);
      $(`.bo .bp .bq.bm`) && cl(`.bo .bp .bq.bm`, "selected", 0);
      cl(el, "selected");

      pos >= 0 && pos < 3 && draw(drawarr, lineCount, dura, [1, 0, 2][pos]);
    }));
  }
}

// Statistics Page Functions
// // Shrink All the Arrays
// let obj = main.stats;
// Object.keys(obj)
//   .map(keys => Object.keys(obj[keys])
//     .filter(key => key != "all" && (obj[keys][key] = shrink(obj[keys][key]))))



// Time Functions
function $tm(e, i) {
  let [w, mo, d, yr, t, o] = e.toString().match(/\S+/g)
  let [h, m] = t.match(/\d+(?=:)/g)
  return [w, mo, d, yr, h, m][i]
}

function wd(arr, dur = 1) {
  function res(e) {
    v = [2, 5, 1, 3, 6][dur - 1];
    return dur <= 2 ? e.setMinutes(Math.round(e.getMinutes() / v) * v, 0, 0) :
      ((dur == 5 || dur == 4) && e.setDate(Math.round(e.getDate() / v) * v), e.setHours(0, 0, 0, 0));
  }
  let temp = JSON.parse(JSON.stringify(arr)).map(e => (e.time = new Date(e.time), e)).map(e => (e.time = res(e.time), e))

  return [...new Set(temp.map(e => e.time))].map(te => ("", {
    time: new Date(te),
    count: temp.filter(e => e.time == te).map(e => e.count).reduce((a, b) => a + b)
    // web: temp.filter(e => e.time == te).map(e => e.host + "/" + e.dir)
  }))
}

// To Save Memory
function shrink(arr) {
  let d = new Date(new Date().setHours(0, 0, 0, 0)),
    shrinked = [];

  [d.setHours(0, 0, 0, 0), d.setDate(d.getDate() - 6), d.setMonth(d.getMonth() - 1), d.setYear(d.getYear() - 1)].map((g, i) => {
    shrinked.push(...arr.filter(e => e.time > g));
    arr = wd(arr.filter(e => e.time < g), i + 2);
  })
  console.log(shrinked);
  return shrinked;
}

let f = 1,
  prearr = [];

function draw(arr, lines, dur, which) {
  let fx = $(".draw").clientWidth * 1.5,
    fy = $(".draw").clientHeight * 1.5,
    g = fy * 0.15,
    hg = g / 2,
    hhg = hg / 2,
    mx, my,
    per = fx;

  // fx = window.innerWidth
  // fy = window.innerHeight
  console.log(dur, which, arr);

  const text = (c, t, x, y) => c.fillText(t, x, y);
  const stb = (arr) => arr.sort((a, b) => a.x - b.x)
  const line = (c, x, y, ex, ey) => {
    c.beginPath(x, y)
    c.moveTo(x, y);
    c.lineTo(x, y);
    c.lineTo(ex, ey);
    c.stroke()
  }
  const props = (c, co, w, d = 0, g = 0) => {
    c.setLineDash([d, g]);
    c.strokeStyle = co;
    c.lineWidth = w
  }

  const $cs = e => {
    let c = $(e);
    c.width = fx
    c.height = fy
    return c
  }


  function font(c, w, s = 16, a = 0) {
    c.font = 'normal ' + w + ' ' + s + 'px sans-serif';
    c.textAlign = !a ? 'center' : a == 1 ? 'bh' : 'left';
    c.textBaseline = "middle"
  }

  function point(c, x, y, co, s) {
    c.beginPath(x, y);
    c.fillStyle = co
    c.arc(x, y, s, 0, 180, false);
    c.fill();
  }

  const $ws = el => window.getComputedStyle($(el));

  function wts(arr, dur) {
    let carr = JSON.parse(JSON.stringify(arr)).map(e => new Date(e)).map(e => {
      switch (e) {
        case 5:
          e.setMonth(0)
        case 4:
          e.setDate(1)
        case 3:
          e.setHours(0, 0, 0, 0)
      }
      return e.setMinutes(0, 0, 0)
    })

    let tf = carr.filter((x, i, a) => a.indexOf(x) == i).map(te => {
      return {
        time: $tm(new Date(te), [4, 0, 2, 1, 3][dur - 1]),
        count: carr.filter(e => e == te).length
      }
    })

    return [...new Set(tf.map(e => e.time))].map(t => ("", {
      time: t,
      count: tf.filter(e => e.time == t).map(e => e.count).reduce((a, b) => a + b)
    })).sort((a, b) => a.count - b.count).reverse().splice(0, [3, 7, 31, 12, 7][dur - 1])
  }

  function graph(canvas, all, g, len = 1, dur = 1, which) {
    let c = canvas.getContext('2d'),
      x = g,
      y = g,
      ex = mx = canvas.width - g,
      ey = my = canvas.height - g;
    f = 1

    let keys = Object.keys(all)
    let savedarr = which ? all[keys[which]] : all[keys[1]].concat(all[keys[2]]);
    // console.log(savedarr);

    if (savedarr.length > 2) {
      per /= parseFloat($ws(canvas).width);

      // console.log(g, ex, ey, fx, fy, canvas.width, $ws(canvas).width)

      m = len * 5;
      c.fillStyle = "rgba(255,255,255,0.4)";
      font(c, 'bold', 16, 1);

      let d = new Date()
      d.setHours(0, 0, 0, 0);

      dur != 1 && d.setDate(d.getDate() + 1);
      dur == 2 && d.setDate(d.getDate() - 7)
      dur == 3 && d.setMonth(d.getMonth() - 1)
      dur == 4 && d.setYear(d.getFullYear() - 1)
      dur != 5 && (savedarr = savedarr.filter(e => e.time >= d))

      // console.log("Original : ", dur, d, savedarr)
      let newobj = wd(savedarr, dur)
      // console.log("Recreated : ", newobj)

      if (newobj.length > 2) {
        // Y lines
        let count = newobj.map(e => e.count),
          max = Math.ceil(([...count].sort((a, b) => a - b).reverse()[0]) / m) * m,
          sy = y - ey,
          ygap = max / len,
          yinc = sy / len;

        props(c, "rgba(255, 255, 255, 0.2)", 1, 9, 13);

        [...Array(len + 1).keys()].map((e, i) => {
          let ty = ey + yinc * i

          gi = 2
          t = Math.round(ygap * i);
          text(c, t, x - 25, ty);
          line(c, x, ty, ex, ty);
        })

        // X Points
        const time = newobj.map(e => e.time).sort((a, b) => a - b),
          xinc = (ex - x) / (time.length - 1),
          arr = [];

        let show = wts(time, dur);
        // console.log("Display Name :", show);

        (ix = [1, 2, 3, 4].indexOf(dur), ix >= 0 && (show = show.filter((e, i) => i % [1, 2, 7, 3][ix] == 0)))

        font(c, 'bold', 16, 0);
        time.map((e, i) => {
          let obj = {
            x: x + (xinc * i),
            y: ey - (((ey - y) * (count[i] / max))),
            c: count[i]
          }

          let [w, mo, d, yr, t, o] = e.toString().match(/\S+/g),
            [h, m] = t.match(/\d+(?=:)/g), dis;

          let save = [h, w, d, mo, yr][dur - 1];

          show.filter((e, i) => e.time == save ? (show.splice(i, 1) | (dis = true), true) : false);

          // For AM/PM
          ap = h > 11 ? ((h == 12 ? h : h -= 12) | (h < 10 && (h = "0" + h)), "PM") : "AM"
          obj.t = dur <= 2 ? `${dur == 2 ? `${w} ` :""}${h}:${m} ${ap}` : `${mo} ${d}${dur > 3 ?`, ${yr}` : ""}`

          // console.log(save, dis, btext, h);

          dis && text(c, [`${h}:00 ${ap}`, w, `${mo} ${d}`, `${mo} ${yr}`, yr][dur - 1], obj.x == g ? obj.x + hhg : obj.x == mx ? obj.x - hhg : obj.x, my + 25)
          arr.push(obj);
        });

        c.lineCap = 'round'
        props(c, "rgba(0, 0, 0, 0.3)");
        if (arr.length > 2) {
          curve(arr, c, "lightgreen", 3.5);
          return arr;
        }
      } else {
        errorData("More Data Needed to Show Stats");
      }
    } else {
      errorData("Not Enough Data to Show Stats");
    }

    function errorData(tx) {
      c.fillStyle = "rgba(255,255,255,0.3)";
      font(c, '500', 24, 0);
      text(c, tx, (ex + x) / 2, (ey + y) / 2);
    }
    return []
  }

  function pointerLine(canvas, arr, g) {
    let c = canvas.getContext('2d');
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

    canvas.onmousemove = function (e) {
      let rect = this.getBoundingClientRect(),
        {
          x,
          y,
          c: v,
          t
        } = whichSide(arr, (e.clientX - rect.left) * per),
        ey = (e.clientY - rect.top) * per;

      c.clearRect(0, 0, canvas.width, canvas.height);
      cl('.bu', 'bv', 1);

      if (g <= x && x <= mx && g <= ey && ey <= (my + hg)) {
        props(c, "rgba(255,255,255,0.5)", 2)
        line(c, x, g, x, my, 0, 0);
        point(c, x, y, "rgba(255, 255, 255, 0.5)", 11)
        point(c, x, y, "rgba(150, 255, 150, 1)", 8)
        font(c, 'Normal', 24, 0);
        box(v, t, x, g - g * 0.85);
        $Arr(`[id*="cursor-"]`).forEach(e => cl(e, "hidden"))
      } else {
        $Arr(`[id*="cursor-"]`).forEach(e => cl(e, "hidden", 0))
      }
    }
  }

  function box(v, t, x, y) {
    let box = $('.bu'),
      start = g / per,
      end = (fx - g) / per;

    box.querySelector(".count").innerText = v
    box.querySelector(".time").innerText = t

    width = Math.abs(parseFloat($ws(box).width) / 2);
    left = (x / per);

    f && (box.style.top = `${(y * per) / 4}px`, f = 0)
    box.style.left = (((left - width) < start) ? width :
      ((left + width) < end) ? left - width : end - width * 2) + "px";

    cl(box, 'bv', 0);
  }

  function curve(points, c, color, width) {
    let whole = []
    points.map((e, i) => {
      points[i + 1] && points[i + 2] && whole.push(...segs(c, [e, points[i + 1], points[i + 2]]));
    })

    let arr = [points[0], ...whole, points[points.length - 1]]

    c.strokeStyle = color;
    c.lineWidth = width;
    c.lineCap = 'round'
    c.beginPath(arr[0].x, arr[0].y)
    c.moveTo(arr[0].x, arr[0].y);

    // arr.map(e => {
    //   c.lineTo(e.x, e.y)
    // })

    for (i = 1; i < arr.length - 2; i++) {
      c.quadraticCurveTo(arr[i].x, arr[i].y, (arr[i].x + arr[i + 1].x) / 2, (arr[i].y + arr[i + 1].y) / 2);
    }

    c.quadraticCurveTo(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y);
    c.stroke()
  }

  function segs(c, s) {
    let p = s[1],
      front = [],
      back = [],
      mid1 = mids(s[0], p),
      mid2 = mids(p, s[2]),
      m1 = mid1,
      m2 = mid2,
      cy1 = mid1.y > p.y,
      cy2 = mid2.y > p.y,
      uy = cy1 && cy2,
      ly = !cy1 && !cy2,
      eqfy = mid1.y == p.y,
      eqby = mid2.y == p.y,
      mmy = !uy && !ly,
      t = 0,
      t1 = 0;

    xd1 = Math.abs(mid1.x - p.x)
    xd2 = Math.abs(mid2.x - p.x)
    xin = (xd1 > xd2 ? xd2 : xd1) * 0.03
    yd1 = Math.abs(mid1.y - p.y)
    yd2 = Math.abs(mid2.y - p.y)
    yin = (yd1 > yd2 ? yd2 : yd1) * 0.03

    while (t != m1.x && t1 != m2.x) {
      t = m1.x
      t2 = m2.x
      m1 = mids(m1, p, eqfy ? 0 : !mmy ? -(xin) : 0, eqfy ? 0 : uy ? yin : ly ? -(yin) : 0)
      m2 = mids(p, m2, eqby ? 0 : !mmy ? xin : 0, eqby ? 0 : uy ? yin : ly ? -(yin) : 0)
      front.push(m1)
      back.push(m2);
    }
    return [mid1, ...stb(front), p, ...stb(back), mid2]
  }

  function mids(o1, o2, xi = 0, yi = 0) {
    return {
      x: ((o1.x + o2.x) / 2) + xi,
      y: ((o1.y + o2.y) / 2) + yi
    }
  }

  function clean(cs) {
    let e = $(cs);
    c = e.getContext('2d');
    e.onmousemove = () => {}
    c.clearRect(0, 0, e.width, e.height);
  }

  clean("#graph");
  clean("#points");
  pointerLine($cs("#points"), graph($cs('#bs'), arr, g, lines, dur, which), g)
}