// Common Variables
let asc, db, snap, player, auth, logedIn = null,
  capture = false,
  ref = {
    svr: "https://element-remover.herokuapp.com"
  };
window.location.href.split(/[&?]/).filter(e => e.match("=")).map(e => (o = e.split("="), (ref[o[0]] = o[1])))
const svr = ref.svr
console.log(ref, svr);

// Basic Functions
const $ = e => typeof e === "string" ? document.querySelector(e) : e,
  $Arr = e => document.querySelectorAll(e),
  $i = e => $("#" + e),
  $p = (e, c) => c == 0 ? e : $p($(e).parentNode, c - 1),
  cl = (el, cls, w = 1) => $(el) && (l = $(el).classList,
    l && cls.replace(/ +/g, " ").split(" ").map(c => w ? l.add(c) : l.remove(c))),
  evt = (el, w, func, aor = 1) => (e = $(el), aor ? e.addEventListener(w, func) : e.removeEventListener(w, func)),
  reveal = (el, t = 400, s = " ") => $Arr(el + s + '.ff').forEach((e, i) => setTimeout(() => {
    cl(e, 'fg');
    cl(e, 'ff', 0);
    setTimeout(() => cl(e, 'fg', 0), 500);
  }, t * i)),
  hide = arr => arr.map(e => $Arr(`${e}>*`).forEach(el => cl(el, 'ff'))),
  none = (el, c = 1) => cl(el, 'ac', c),
  vanish = (id, con = 1) => {
    let el = $(id)
    cl(el, 'fg', !con);
    cl(el, 'ff', con);
    el.style.height = el.height + "px";
    setTimeout(() => cl(el, 'fw', con) | (el.style.height = 0) | el.removeAttribute("style"), 500);
  },
  promote = () => !app.pro && app.tasks.promo() | evt("#n" + 'ao', "click", promote, 0),
  create = (tag, cl, text = "", html = false, et, func) => {
    el = document.createElement(tag)
    el.setAttribute("class", cl)
    html ? el.innerHTML = text : el.innerText = text
    et && evt(el, et, func);
    return el
  },
  cS = (id, func, src = null) => {
    e = document.createElement("script"),
      e.id = id,
      e.src = src ? src : `https://element-remover.github.io/assets/js/${id}.js`,
      e.onload = func
    $("head").appendChild(e)
  },
  toggle = (el, c) => cl(el, c, !$(el).classList.contains(c)),
  time = [864E5, 2592E5, 72576E5],
  inh = o => `<div class='b'><span class='h'></span><div class='c'>${(r = o.r || 0, r ? o.r : "Redirecting to")}<br><a ${o.l ? `href="${o.l}"` :""}>${o.n}</a></div>
  <div class='d'>${o.i}</div></div>`,

  // Logging
  log = (text, obj = "", color = 0, design = 0) => console.log(...obj != "" || color || design ? [`%c${["", "-->", "~~>", "==>", "=>>", "*", "  >="][design]} ${text}`,
    `color : ${["white", "green", "yellowgreen", "yellow", "blue", "orange", "pink", "red", "springgreen", "cyan", "darkorchid"][color]}`, obj
  ] : [text]),
  popup = (text, color) => {
    if (!$('.gg')) {
      let mesbox = create("div", 'gf');
      let mes = create("div", 'k q gg ez', text)

      evt(mesbox, "mouseover", () => setTimeout(() => cl('.gg', 'fa', 0), 50))
      mesbox.appendChild(mes)
      $('main').appendChild(mesbox)
    }

    let el = $('.gg')
    el.innerHTML = `<span>${text}</span>`
    color && (el.style.background = color);
    cl(el, 'ez fa', 0)
    setTimeout(() => cl(el, 'ez fa'), 50)
  },
  title = e => e.split(/-|\/| /).map(e => e.replace(/(\w)(?=\w{2,})/, e => e.toUpperCase())).join(' '),
  eh = err => console.log(err) | popup(title(err.code)),
  cursor = {
    d: 9,
    x: 0,
    y: 0,
    ex: (window.innerWidth / 2),
    ey: (window.innerHeight / 2),
    dot: $('#es'),
    back: $('#et'),

    init: function () {
      this.events();
      this.animate();
    },

    events: function () {
      var self = this;

      ['a', 'button', '.bi', '.fy', 'img'].map(e => $Arr(e).forEach(el =>
        evt(el, "mouseover", () => cl(el, 'czk') | self.toggleCS()) |
        evt(el, "mouseout", () => cl(el, 'czk', 0) | self.toggleCS(0))
      ))

      evt(document, "mousemove", function (e) {
        self.toggleCV();

        self.ex = e.clientX;
        self.ey = e.clientY;
        self.dot.style.top = self.ey + "px";
        self.dot.style.left = self.ex + "px";
      });
      evt(document, "click", () => $('.czk') && self.toggleCV(0))
      evt(document, "mousedown", () => self.toggleCS())
      evt(document, "mouseup", () => self.toggleCS(0))
      evt(document, "mouseenter", () => self.toggleCV())
      evt(document, "mouseover", e => e.target.nodeName == "IFRAME" && self.toggleCV(0))
      evt(document, "mouseleave", () => self.toggleCV(0))
    },

    animate: function () {
      var s = this;
      const val = (s, e) => (!(s + "").match(/e/) ? s : e) + "px";

      s.x += (s.ex - s.x) / s.d;
      s.y += (s.ey - s.y) / s.d;
      s.back.style.top = val(s.y, s.ey);
      s.back.style.left = val(s.x, s.ex);

      requestAnimationFrame(this.animate.bind(s));
    },

    toggleCS: function (con = 1) {
      var self = this;
      cl(self.dot, 'ge', con);
      cl(self.back, 'ge', con);
    },

    toggleCV: function (con = 1) {
      var self = this;
      cl(self.dot, 'gd', con);
      cl(self.back, 'gd', con);
    }
  },

  // Tools Events and Object
  data = obj => {
    const f = db.doc("data")
    const get = async () => await f.get()
    const update = () => f.update({
      tools: obj
    }).catch(err => eh(err))

    return {
      get,
      update
    }
  },
  ccc = () => app.pro && cl($p('#ci', 4), 'fm', [...app.tools.get()].splice(0, 2).map(e => parseInt(e)).reduce((a, b) => a + b) == 0),
  ppt = e => cl($p(e.target, 4), 'fm', !app.pro),
  tsu = () => data(app.tools.get()).update(), // For Updating Tools
  wfi = async (f, s = "Something Got!", w = "Something", ms = 500) => (r = await new Promise(r => setTimeout(r, ms)), (res = f(), res ? (console.log(s), res) : (console.log("Waiting for", w + "..."), wfi(f, s, w, ms))));

// App Initilized
const app = {
  su: null,
  ads: null,
  user: null,
  data: null,
  pro: 0,
  whole: true,
  init: function (user, data) {
    user = user || this.user
    data = data || this.data

    // console.log(user, data, this.ads);
    this.pro = data.plan;
    this.account.init(user, data)
    this.tools.init(data.tools);
    this.tasks.init(this.ads);
    console.log("App Initialized.");
  },
  setUser: function (user) {
    this.user = user
    this.account.set(user);
    this.su = [user.card, user.id].join(":");
  },
  update: function (obj) {
    let con = Object.keys(obj).indexOf("ad") != -1
    if (con) {
      this.ads = obj;
      !this.whole && this.tasks.init(obj)
    } else {
      if (this.data && !this.whole) {
        this.data.plan != obj.plan ? app.init(null, obj) : this.tools.init(obj.tools)
      }
      this.data = obj

    }
    (this.ads && this.data) && this.whole && this.init() | (this.whole = false)
  },

  account: {
    keys: ["id", "email"],
    arr: ['ay', 'ba'],
    init: function (user, data) {
      this.set(user);
      console.log("* Account Plan :", app.pro);
      this.timer.stop()
      setTimeout(() => app.pro && this.timer.init(data), 1300)
    },
    set: function (user) {
      this.arr.map((e, i) => $(`.ax.${e}`).innerText = user[this.keys[i]])
      none('.av.ba', !user.email)
      none('.ae.bb', !user.trust)

      $Arr('.bc .bd .bi').forEach((el, i) => {
        cl(el.parentNode, 'bm', i == app.pro);
        text = i < app.pro ? "Unlocked" : i > app.pro ? "Get" : "";
        el.innerText = i ? text : "Unlocked";
      });
    },
    timer: {
      plan: null,
      from: null,
      button: null,
      member: null,
      s: 0,
      init: function (data) {
        this.button = $('.bc .bd.bm .bi');
        this.member = $('#dt');
        this.plan = data.plan;
        this.from = data.from;
        this.start();
        this.s = 0;
        console.log("  >= Timer :\n", data);
      },
      start: function () {
        let self = this;
        if (this.plan != 0 && this.from != null) {
          let diff = Math.abs(new Date(this.from) - new Date()),
            end = this.plan == 1 ? time[1] : time[2],
            text;
          if (diff < end) {
            text = this.getms(end - diff);
            if (!this.s)
              setTimeout(() => this.start(), 1000)
            else
              return (self.s = 0, console.log("Timer Stopped!"));
          } else {
            text = "Expired"
            app.send("")
          }
          this.button.innerText = text
          this.member.innerHTML = text[0] === "E" ? `<no class='fs'>Expired</no>` : text.replace(/ /g, "").split(":").reverse().map((e, i) => `<no>${e}</no><span>${["second", "minute", "hour", "day"][i] + (ep = parseInt(e), ep != 1 && ep ? "s" : "")}</span> `).reverse().reduce((a, b) => a + b)
        }
      },
      stop: function () {
        let self = this;
        self.s = 1;
        setTimeout(() => (self.s = 0), 1150);
      },
      getms: ms => {
        let t = [86400, 3600, 60, 1, 0].map(e => e * 1000),
          o = [];
        const a = (e, r) => {
          let l = parseInt(e),
            i = t[r];
          return i ? (l >= i || o.length) ? (o.push((ei = parseInt(l / i) + "", ei).length == 1 ? "0" + ei : ei), a(l % i, ++r)) : a(l, ++r) : 0
        };
        return a(ms, 0), o.length ? o.join(" : ") : "00"
      }
    }
  },

  tools: {
    arr: ['#cc', '#ce', '#cf', '#cg', '#ch', '#ci'],
    values: "000000",
    init: function (obj) {
      this.setupEvents(0);
      this.setupEvents(1);
      this.set(obj);
      console.log("* Tools Updated :", obj);
    },
    set: function (v) {
      return (typeof v == "string" ? v : this.values).split("").splice(0, 6).map((e, i) => (c = parseInt(e), $(app.tools.arr[i]).checked = i < 4 ? c : app.pro ? c : 0)).reduce((a, b) => a.toString() + b)
    },
    get: function () {
      return this.arr.map(e => $(e).checked ? "1" : "0").reduce((a, b) => a + b)
    },
    setupEvents: function (w) {
      let arr = [...this.arr];
      arr.splice(0, 2).map(el => evt(el, "click", ccc, w))
      arr.splice(2).map(el => evt(el, "click", ppt, w))
      this.arr.map(el => (w && $(el).click()) | evt(el, "click", tsu, w))
    }
  },

  tasks: {
    keys: ["ad", "watch", "surf"],
    values: [3, 15, 30],
    div: ['#ea', '#eb', '#ec'],
    con: ['di', 'dk', 'dq'],
    init: function (obj) {
      this.blocks();
      this.set(obj);
      Object.values(obj).reduce((a, b) => a + b) === 0 && app.send("");

      console.log("* Tasks :", obj);
    },
    set: function (obj) {
      return this.keys.map((el, i) => {
        let e = obj[el] != undefined ? obj[el] : this.values[i];
        (i != 1 || !$('.ft')) && vanish(`.${this.con[i]}`, !e);
        this.values[i] = e;
        $(this.div[i]).innerText = app.pro ? "" : e ? `${e + (i ? "s" : "")} left` : ""
        cl($(this.div[i]).parentNode, 'gb', !e || app.pro);
        return e
      })
    },
    blocks: function () {
      cl('.dg', 'fr', app.pro);
      none('#df .ds', !app.pro)
      none('.dh', app.pro);
      none('.du', app.pro == 2);
      $('.dg').innerHTML = app.pro ? `<span class='av'>Pr${app.pro == 1 ? "o" : "emium"} Membership Activated</span>` : `Complete Tasks to Become Pro Member for ${app.user.card === "member" ? 3 + " Days" : 1 + " Day"}.`
    },
    rid: (arr, count = 1) => {
      let len = arr.length,
        rarr = [];
      return count < len ? (Array.from({
        length: count
      }, (_, i) => i).map(() => {
        let flag = true,
          r;
        while (flag) {
          r = parseInt(Math.random() * len);
          !rarr.toString().match(r) && rarr.push(r) | (flag = false)
        }
      }), rarr.map(e => arr[e])) : arr
    },
    promo: async function () {
      let cv = app.ads.watch,
        cw = app.ads.surf

      if (cv || cw) {
        let res = await app.send("promo");

        if (cv) {
          let video = res.watch[0]
          cl('.dk', 'fw ff', 0);
          $('#dl iframe').src = `https://www.youtube.com/embed/${video.src}?enablejsapi=1&modestbranding=1`
          $('#dl .dn').innerText = video.views
          $('#dl .do').innerText = video.by
          $('#dl .dp').innerText = video.paid
          this.watchBox.init(video.id);
        }

        if (cw) {
          cl('.dq', 'fw ff', 0);
          $('#dr').innerHTML = "";
          res.webs.map(site => $('#dr').appendChild(create("div", 'fx',
            `<div class='fy'><img data-src="https://element-remover.github.io/assets/svg/mui.svg" src="https://${site.img}" alt="${site.info}"></div><a href="https://${site.link}/?ref=element-remover-${app.su}&svr=${svr}&id=${site.id}" target="_blank"` +
            `class='fz'></a><div class='bg'><div class='df'><div class='ab'>${site.title}</div></div>${site.paid ? `<div class='ga'><span class='dp'></span></div>` : ``}</div>`, true)))
        }
      }
    },
    watchBox: {
      evt: ['unstarted', 'fv', 'ft', 'fu', 'buffering', 'cued'],
      state: 'ac',
      wc: 0,
      key: "",
      init: function (id) {
        this.id = id
        cS('iframe-demo', () => console.log("Watch Box Inite."), "https://www.youtube.com/iframe_api")
      },
      ready: function (v) {
        v = new YT.Player('dm', {
          events: {
            "onReady": () => console.log("Player Ready") | this.watch(),
            "onStateChange": state => (w = this.evt[state.data + 1], (this.state = w) | cl('#dl', w) | cl('#dl', this.evt.filter(e => e != w).join(" "), 0)),
            "onError": () => cl('#dl', 'error')
          }
        });
      },
      watch: async function () {
        let self = this;
        if (self.state == 'ft') {
          console.log(self.wc);
          !self.key && (self.key = app.send("pro", `1:${self.id}`))
          if (self.wc < 16) {
            let l = 15 - self.wc;
            ++self.wc;
            l == 0 && await app.send("pro", `1:${self.id}:${(await Promise.all([self.key]))[0].key}`);
            app.tasks.set({
              watch: l
            })
          } else return self.none()
        }
        setTimeout(() => self.watch(), 1000)
      },
      none: function () {
        return this.state == 'fu' ? vanish('.dk') : setTimeout(() => this.none(), 2000);
      }
    }
  },
  statistics: function () {
    !$("script#stats") && cS("stats", () => design &&

      design.init(stats)


    );
    console.log("Currently in Development!");
  },
  privacy: async function () {
 !$("script#privacy") && cS("privacy", () => privacy && ($('#am .as').innerHTML = privacy));
  },

  info: async function () {
    let self = this,
      body = '#d .n .as',
      inse = $(`${body} .fk`),
      page = $(`${body} .bj`),
      btns = ['cv', 'cw', 'cx', 'cz', 'cy', 'dc', 'dd', 'de'],
      hbtns = [],
      main = '#gp',
      submit;

    if (!capture) {
      let ext = await wfi(() => !capture ? (el = $('#fn'), el ? (capture = true, el) : false) : false, "Exarea Got!", "User Click")

      if (ext) {
        page.insertBefore(ext, $(`${body} .at`))
        cl(body, 'fj', 0);
        inse.remove();
      }
    }

    !$(main) && await new Promise(r => setTimeout(r, 1200));
    $(main) && $('#d .at').setAttribute("style", `height : ${window.getComputedStyle($(main)).height}; margin: 1em 0 0`);
    $Arr('#fn ' + "[id]").forEach(e => !main.match(e.id) && hbtns.push(e.id));
    hbtns.map(e => (i = btns.indexOf(e), i != -1 && btns.splice(i, 1)));
    btns.map(el => none(`${body} .at .${el}`));
    submit = $('#cz');
    cl(page, 'fq', $('#dd') || submit);
    cl(`${body} .cm .cn`, 'fg', submit);
    if (submit) {
      let [bts, bth] = submit.querySelector('.gu').innerText == "Submit" ? ['da', 'db'] : ['db', 'da'];
      cl(`${body} .at .${bts}`, 'fg', 0)
      none(`${body} .at .${bts}`, 0);
      cl(`${body} .at .${bth}`, 'fg', 0)
      none(`${body} .at .${bth}`);
      setTimeout(() => cl(`${body} .at .${bts}`, 'fg'), 600);
      let hlter = [
          ['gk', 'gj', 'gl'],
          ['gn', 'gm', 'go']
        ],
        arr = hlter[bts == 'da' ? 0 : 1],
        arr2 = hlter[bts != 'da' ? 0 : 1],
        els = ['co', 'cp', 'bm'];
      els.map((e, i) => cl(`${body} .cm .cn .${e}`, arr2[i], 0) | cl(`${body} .cm .cn .${e}`, arr[i]))
    }
    hbtns.map(e => none(`${body} .at .${e}`, 0) | (el = $(`#fn #${e}`),
      el && evt(el, "mouseover", () => cl(page, `fo ${e}`)) |
      evt(el, "click", () => (/(i|e)m/i.test(e) && cl(page, 'fq')) |
        cl(page, `fo ${e}`, 0) | self.info()) |
      evt(el, "mouseleave", () => cl(page, `fo ${e}`, 0))))
  },



  auth: async () => {
    // Authorization
    asc = auth.onAuthStateChanged(async su => {
      let u = !su ? {
        card: "user",
        id: (await app.send("id", true, 0)).id,
        email: null,
        trust: false
      } : {
        card: "member",
        id: su.uid,
        email: su.email,
        trust: su.emailVerified
      }
      console.log(`User : \n`, u);
      cl('main', 'a', 0);

      if (ref.s || u.card === "member" || ($('.e').remove() | setTimeout(() => none('#j', 0), 100) | reveal(['#i']), await wfi(() => logedIn != null, "User Loged In", "User to Login"))) {
        none('#i')

        db = firebase.firestore().collection("account").doc(u.card).collection(u.id)

        app.setUser(u);
        console.log("Getting User Info...")
        typeof (await app.send("")) != "boolean" && none('.z .ac', 0)

        let con = u.card !== "user",
          h = new Date().getHours();
        con && popup(`${h > 22 || h < 5 ? "It's time to Sleep" : (h < 12 ? "Good Morning": h < 18 ? "Good Afternoon" : "Good Evening")}, ${title(su.displayName)}`, "#e2bcb7");

        // For Changes
        snap = db.onSnapshot(snap => snap.docChanges().forEach(change => console.log(change.type) | app.update(change.doc.data())), err => console.log(err));

        await wfi(() => !app.whole, "User Data Got!", "User Data")
        app.activate();
      }
    })
  },
  activate: () => {
    let slides = ['aj', 'ak', 'al', 'am', 'd', 'ao', 'ap'],
      sides = ["account", "statistics", "tools", "privacy", "info", "pro", "dev"],
      wsc = '.z .n',
      nav = '.ad .ah',
      sc = '.aq .l .ar';
    const opening = () => setTimeout(() => none('.z') | reveal(nav, 200) | setTimeout(() => $(`#n` + (a = sides.reduce((a, b, i) => b == ref.s ? i : a + 0, -1), slides[a > 0 ? a : 0])).click(), 200 * slides.length), 500);

    // Default Main Things
    hide([nav, sc + ">*"]);
    hide([sc, sc + ">*"]);
    $Arr(`${sc}`).forEach((e, i) => (e.id = slides[i]));
    $Arr(`${nav}>*`).forEach((e, i) => (e.id = "n" + slides[i]));

    app.extension()
    evt('.az', "click", evt => (cl(evt.target, 'eu'), setTimeout(() => cl(evt.target, 'eu', 0), 400)) | navigator.clipboard.writeText(evt.target.parentNode.firstElementChild.innerText));
    $Arr('.bc .bd .bi').forEach((el, i) => i && evt(el, "click", e => e.target.innerText == "Get" && $(`.ad button:nth-child(${5 + i})`).click()))
    evt('#n' + 'am', "click", () => app.privacy())
    evt('#ap .eq', "click", () => toggle('#ap .l', 'gc'))
    $Arr(`${nav}>*`).forEach(e => evt(e, "click", evt => {
      let el = evt.target,
        pos = Array.from(el.parentNode.children).indexOf(el),
        selected = $(`${nav} .bm`),
        selectpos = selected && Array.from(el.parentNode.children).indexOf(selected);
      if (selectpos != pos) {
        selected && cl(`${nav} .bm`, 'bm', 0);
        cl(el, 'bm');
        let ih = window.innerHeight;
        $('style#f').innerHTML = `:root {--ty : translateY(${ih * -(pos)}px); --ih:${ih}px;}`
        hide([sc, sc + ">*"]);
        reveal(`${sc}:nth-child(${(++pos)})`);
      }
    }));

    (e = $('.e'), e && e.remove())
    console.log("App Activated");

    ref.s ? opening() : evt('.aa', "click", () => {
      $('.aa').style = `transform: translateY(${-window.innerHeight}px);`;
      opening();
    }) | reveal(wsc, 500);
  },
  extension: () => {
    console.log("Checking for Extension...");



      let arr = ['ak', 'd'];
      evt('#n' + 'ao', "click", promote);

      $("html.exinstalled") ?
        arr.map((e, i) => (el = $(`#${e} .n>.as`), cl(el, 'fj') |
          evt("#n" + e, "click", i ? () => app.info() : () => app.statistics()) |
          el.appendChild(create("div", 'fk', inh({
            l: "",
            r: ["Fetching Statistics From", "Waiting For"][i],
            n: ["Extension", "User to click on Element Remover Extension Icon"][i],
            i: ["Currently in Development!", "To Start Live Demo Do a Click on the Icon"][i]
          }), true)))) :
        arr.map(e => (el = $(`#${e} .n>.as`), cl(el, 'fi') | (el.innerHTML += inh({
          l: "https://chrome-extension.com/",
          n: "www.chrome-extension.com",
          i: "Please Install the Element Remover Extension First"
        }))))

      console.log("Extension Present", $("html.exinstalled") ? true : false);


    $Arr('.b').forEach(e => evt(e, "mouseover", () => setTimeout(() => e.querySelector('a').click(), 3000)));
    $('html').removeAttribute("class");
  },

  start: function () {
    // Main Things 
    $('style#f').innerHTML = `:root {--ty : translateY(0px); --ih:${window.innerHeight}px;}`

    // Login Events
    evt('.v', "click", () => (logedIn == null && (logedIn = true)) | cl('#j', 'ff') | setTimeout(() => none('#i'), 500))
    evt('#p', "click", () => auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => (logedIn = false) | $('.v').click())
      .catch(error => eh(error)))
    evt('#t', "click", () => $('.v').click())
    hide(['#i', '.z .n'])

    this.auth()
  },
  send: async (key, value = 1, user = 1) => {
    let obj = {
      [key]: value
    };
    user && (obj.user = app.su)
    console.log("==>", obj)
    return await fetch(`${svr}/?d=${JSON.stringify(obj)}`, {
        method: "POST"
      }).then(res => res.json() || res.text())
      .then(res => (console.log("<==", res), res));
  },
  logout: () => auth.signOut()
    .then(() => popup("You loged Out!", "#fca3cc") | asc() | snap() | window.location.reload())
    .catch(err => eh(err))
};

// For Click Ad
const adClicked = () => app.send("pro", "0")

function onYouTubeIframeAPIReady() {
  console.log("Ready");
  app.tasks.watchBox.ready(player)
}

async function online() {
  cursor.init()
  try {
    let el = (e = $('.e .d'), e ? e : null)
    navigator && !navigator.onLine && (el.innerText = "Waiting for Internet...")

    await wfi(() => navigator && navigator.onLine && (el.innerText = "Initializing..."), "User is Online Now!", "Internet");
    firebase.initializeApp({
      apiKey: "AIzaSyA502RgJsNCKAtznHm6SX-C5IvQsyWaqNI",
      authDomain: "element-remover.firebaseapp.com",
      projectId: "element-remover",
      databaseURL: "https://element-remover.firebaseio.com",
      storageBucket: "element-remover.appspot.com",
      messagingSenderId: "524051898519",
      appId: "1:524051898519:web:9e8f4351873618e97309d2",
      measurementId: "G-BC94E76T5Z"
    })
    auth = firebase.auth();
 (navigator.userAgentData && !navigator.userAgentData.mobile) ? cS("body", () => ($("main").innerHTML = body, console.log("Body Got!") | app.start())) : popup("Web Extension is Not Supported");
  } catch (err) {
    popup(err);
  }
}
online();