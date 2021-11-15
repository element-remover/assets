// Common Variables
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
  reveal = (el, t = 400, s = " ") => $Arr(el + s + '.fn').forEach((e, i) => setTimeout(() => {
    cl(e, 'fo');
    cl(e, 'fn', 0);
    setTimeout(() => cl(e, 'fo', 0), 500);
  }, t * i)),
  hide = arr => arr.map(e => $Arr(`${e}>*`).forEach(el => cl(el, 'fn'))),
  none = (el, c = 1) => cl(el, 'al', c),
  vanish = (id, con = 1) => {
    let el = $(id)
    cl(el, 'fo', !con);
    cl(el, 'fn', con);
    el.style.height = el.height + "px";
    setTimeout(() => cl(el, 'ge', con) | (el.style.height = 0) | el.removeAttribute("style"), 500);
  },
  promote = () => !app.pro && app.tasks.promo() | evt("#n" + 'ax', "click", promote, 0),
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
  inh = o => `<div class='j'><span class='p'></span><div class='k'>${(r = o.r || 0, r ? o.r : "Redirecting to")}<br><a ${o.l ? `href="${o.l}"` :""}>${o.n}</a></div>
  <div class='l'>${o.i}</div></div>`,

  // Logging 
  log = (text, obj = "", color = 0, design = 0) => console.log(...obj != "" || color || design ? [`%c${["", "-->", "~~>", "==>", "=>>", "*", "  >="][design]} ${text}`,
    `color : ${["white", "green", "yellowgreen", "yellow", "blue", "orange", "pink", "red", "springgreen", "cyan", "darkorchid"][color]}`, obj
  ] : [text]),
  popup = (text, color) => {
    if (!$('.gn')) {
      let mesbox = create("div", 'gm');
      let mes = create("div", 't z gn fh', text)

      evt(mesbox, "mouseover", () => setTimeout(() => cl('.gn', 'fi', 0), 50))
      mesbox.appendChild(mes)
      $('main').appendChild(mesbox)
    }

    let el = $('.gn')
    el.innerHTML = `<span>${text}</span>`
    color && (el.style.background = color);
    cl(el, 'fh fi', 0)
    setTimeout(() => cl(el, 'fh fi'), 50)
  },
  title = e => e.split(/-|\/| /).map(e => e.replace(/(\w)(?=\w{2,})/, e => e.toUpperCase())).join(' '),
  eh = err => console.log(err) | popup(title(err.code)),
  cursor = {
    d: 9,
    x: 0,
    y: 0,
    ex: (window.innerWidth / 2),
    ey: (window.innerHeight / 2),
    dot: $('#fb'),
    back: $('#fc'),

    init: function () {
      this.events();
      this.animate();
    },

    events: function () {
      var self = this;

      ['a', 'button', '.br', '.gg', 'img'].map(e => $Arr(e).forEach(el =>
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
      cl(self.dot, 'gl', con);
      cl(self.back, 'gl', con);
    },

    toggleCV: function (con = 1) {
      var self = this;
      cl(self.dot, 'gk', con);
      cl(self.back, 'gk', con);
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
  ccc = () => app.pro && cl($p('#cr', 4), 'fu', [...app.tools.get()].splice(0, 2).map(e => parseInt(e)).reduce((a, b) => a + b) == 0),
  ppt = e => cl($p(e.target, 4), 'fu', !app.pro),
  tsu = () => data(app.tools.get()).update(), // For Updating Tools
  loged = async () => {
    console.log("Waiting for User to Login...");
    if (logedIn != null) {
      return logedIn;
    }
    await new Promise(r => setTimeout(r, 500));
    return loged();
  }, loaded = async () => {
    console.log("Waiting for Data...");
    if (!app.whole) {
      return true;
    }
    await new Promise(r => setTimeout(r, 500));
    return loaded();
  };

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
    arr: ['bh', 'bj'],
    init: function (user, data) {
      this.set(user);
      console.log("* Account Plan :", app.pro);
      this.timer.stop()
      setTimeout(() => app.pro && this.timer.init(data), 1300)
    },
    set: function (user) {
      this.arr.map((e, i) => $(`.bg.${e}`).innerText = user[this.keys[i]])
      none('.be.bj', !user.email)
      none('.an.bk', !user.trust)

      $Arr('.bl .bm .br').forEach((el, i) => {
        cl(el.parentNode, 'bv', i == app.pro);
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
        this.button = $('.bl .bm.bv .br');
        this.member = $('#eb');
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
          this.member.innerHTML = text[0] === "E" ? `<no class='ga'>Expired</no>` : text.replace(/ /g, "").split(":").reverse().map((e, i) => `<no>${e}</no><span>${["second", "minute", "hour", "day"][i] + (ep = parseInt(e), ep != 1 && ep ? "s" : "")}</span> `).reverse().reduce((a, b) => a + b)
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
    arr: ['#cl', '#cn', '#co', '#cp', '#cq', '#cr'],
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
    div: ['#ei', '#ej', '#ek'],
    con: ['dq', 'ds', 'dy'],
    init: function (obj) {
      this.blocks();
      this.set(obj);
      Object.values(obj).reduce((a, b) => a + b) === 0 && app.send("");

      console.log("* Tasks :", obj);
    },
    set: function (obj) {
      return this.keys.map((el, i) => {
        let e = obj[el] != undefined ? obj[el] : this.values[i];
        (i != 1 || !$('.gb')) && vanish(`.${this.con[i]}`, !e);
        this.values[i] = e;
        $(this.div[i]).innerText = app.pro ? "" : e ? `${e + (i ? "s" : "")} left` : ""
        cl($(this.div[i]).parentNode, 'fx', !e || app.pro);
        return e
      })
    },
    blocks: function () {
      cl('.do', 'fz', app.pro);
      none('#dn .ea', !app.pro)
      none('.dp', app.pro);
      none('.ec', app.pro == 2);
      $('.do').innerHTML = app.pro ? `<span class='be'>Pr${app.pro == 1 ? "o" : "emium"} Membership Activated</span>` : `Complete Tasks to Become Pro Member for ${app.user.card === "member" ? 3 + " Days" : 1 + " Day"}.`
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
          cl('.ds', 'ge fn', 0);
          $('#dt iframe').src = `https://www.youtube.com/embed/${video.src}?enablejsapi=1&modestbranding=1`
          $('#dt .dv').innerText = video.views
          $('#dt .dw').innerText = video.by
          $('#dt .dx').innerText = video.paid
          this.watchBox.init(video.id);
        }

        if (cw) {
          cl('.dy', 'ge fn', 0);
          $('#dz').innerHTML = "";
          res.webs.map(site => $('#dz').appendChild(create("div", 'gf',
            `<div class='gg'><img data-src="https://element-remover.github.io/assets/svg/mui.svg" src="https://${site.img}" alt="${site.info}"></div><a href="https://${site.link}/?ref=element-remover-${app.su}&svr=${svr}&id=${site.id}" target="_blank"` +
            `class='gh'></a><div class='bp'><div class='dn'><div class='ak'>${site.title}</div></div>${site.paid ? `<div class='gi'><span class='dx'></span></div>` : ``}</div>`, true)))
        }
      }
    },
    watchBox: {
      evt: ['unstarted', 'gd', 'gb', 'gc', 'buffering', 'cued'],
      state: 'al',
      wc: 0,
      key: "",
      init: function (id) {
        this.id = id
        cS('iframe-demo', () => console.log("Watch Box Inite."), "https://www.youtube.com/iframe_api")
      },
      ready: function (v) {
        v = new YT.Player('du', {
          events: {
            "onReady": () => console.log("Player Ready") | this.watch(),
            "onStateChange": state => (w = this.evt[state.data + 1], (this.state = w) | cl('#dt', w) | cl('#dt', this.evt.filter(e => e != w).join(" "), 0)),
            "onError": () => cl('#dt', 'error')
          }
        });
      },
      watch: async function () {
        let self = this;
        if (self.state == 'gb') {
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
        return this.state == 'gc' ? vanish('.ds') : setTimeout(() => this.none(), 2000);
      }
    }
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
      cl('main', 'i', 0);

      if (ref.s || u.card === "member" || ($('.m').remove() | setTimeout(() => none('#s', 0), 100) | reveal(['#r']), await loged())) {
        none('#r')

        db = firebase.firestore().collection("account").doc(u.card).collection(u.id)

        app.setUser(u);
        console.log("Getting User Info...")
        typeof (await app.send("")) != "boolean" && none('.ai .al', 0)

        let con = u.card !== "user",
          h = new Date().getHours();
        con && popup(`${h > 22 || h < 5 ? "It's time to Sleep" : (h < 12 ? "Good Morning": h < 18 ? "Good Afternoon" : "Good Evening")}, ${title(su.displayName)}`, "#e2bcb7");

        // For Changes
        snap = db.onSnapshot(snap => snap.docChanges().forEach(change => console.log(change.type) | app.update(change.doc.data())), err => console.log(err));

        await loaded();
        app.activate();
      }
    })
  },
  activate: () => {
    let slides = ['as', 'at', 'au', 'av', 'l', 'ax', 'ay'],
      sides = ["account", "statistics", "tools", "privacy", "info", "pro", "dev"],
      wsc = '.ai .w',
      nav = '.am .aq',
      sc = '.az .u .ba';
    const opening = () => setTimeout(() => none('.ai') | reveal(nav, 200) | setTimeout(() => $(`#n` + (a = sides.reduce((a, b, i) => b == ref.s ? i : a + 0, -1), slides[a > 0 ? a : 0])).click(), 200 * slides.length), 500);

    // Default Main Things
    hide([nav, sc + ">*"]);
    hide([sc, sc + ">*"]);
    $Arr(`${sc}`).forEach((e, i) => (e.id = slides[i]));
    $Arr(`${nav}>*`).forEach((e, i) => (e.id = "n" + slides[i]));

    app.extenstion()
    evt('.bi', "click", evt => (cl(evt.target, 'fd'), setTimeout(() => cl(evt.target, 'fd', 0), 400)) | navigator.clipboard.writeText(evt.target.parentNode.firstElementChild.innerText));
    $Arr('.bl .bm .br').forEach((el, i) => i && evt(el, "click", e => e.target.innerText == "Get" && $(`.am button:nth-child(${5 + i})`).click()))
    evt('#n' + 'ax', "click", promote)
    evt('#n' + 'av', "click", () => app.privacy())
    evt('#ay .ez', "click", () => toggle('#ay .u', 'gj'))
    $Arr(`${nav}>*`).forEach(e => evt(e, "click", evt => {
      let el = evt.target,
        pos = Array.from(el.parentNode.children).indexOf(el),
        selected = $(`${nav} .bv`),
        selectpos = selected && Array.from(el.parentNode.children).indexOf(selected);
      if (selectpos != pos) {
        selected && cl(`${nav} .bv`, 'bv', 0);
        cl(el, 'bv');
        let ih = window.innerHeight;
        $('style#n').innerHTML = `:root {--ty : translateY(${ih * -(pos)}px); --ih:${ih}px;}`
        hide([sc, sc + ">*"]);
        reveal(`${sc}:nth-child(${(++pos)})`);
      }
    }));

    (e = $('.m'), e && e.remove())
    console.log("App Activated");

    ref.s ? opening() : evt('.aj', "click", () => {
      $('.aj').style = `transform: translateY(${-window.innerHeight}px);`;
      opening();
    }) | reveal(wsc, 500);
  },
  info: async function () {
    const wfi = async id => (r = await new Promise(r => setTimeout(r, 500)), !capture ? $(id) ? (capture = true, $(id)) : wfi(id) : console.log("Already Captured!"));
    let self = this,
      body = '#l .w .bb',
      inse = $(`${body} .fs`),
      page = $(`${body} .bs`),
      btns = ['de', 'df', 'dg', 'ad', 'dh', 'dk', 'dl', 'dm', 'di', 'dj'],
      hbtns = [],
      submit;

    if (!capture) {
      console.log("Waiting for User to Click on Extenstion Icon");
      let ext = await wfi("#exarea")
      if (ext) {
        page.insertBefore(ext, $(`${body} .bc`))
        console.log("Extenstion Captured")
        cl(body, 'fr', 0);
        inse.remove();
      }
    }

    !$('#gx') && await new Promise(r => setTimeout(r, 1200));
    $('#gx') && $('#l .bc').setAttribute("style", `height : ${window.getComputedStyle($('#gx')).height}; margin: 1em 0 0`);
    $Arr(`#exarea [id$='Btn']`).forEach(e => hbtns.push(e.id.replace('Btn', "")));
    hbtns.map(e => (i = btns.indexOf(e), i != -1 && btns.splice(i, 1)));
    btns.map(el => none(`${body} .bc .${el}`));
    submit = $('#hi');
    cl(page, 'fy', $('#ht') || submit);
    cl(`${body} .cv .cw`, 'fo', submit);
    if (submit) {
      let bt = submit.querySelector('.hc').innerText == "Submit" ? 'di' : 'dj';
      cl(`${body} .bc .${bt}`, 'fo', 0)
      none(`${body} .bc .${bt}`, 0);
      setTimeout(() => cl(`${body} .bc .${bt}`, 'fo'), 600);
      let arr = bt == 'di' ? ['highlighted', 'dark'] : ['co', 'removing'],
        arr2 = bt != 'di' ? ['highlighted', 'dark'] : ['co', 'removing'],
        els = ['cx', 'cy', 'bv'];
      els.map((e, i) => cl(`${body} .cv .cw .${e}`, (i < 2 ? (i == 1 ? 'p' : '') + arr2[0] : arr2[1]) + 'ElementBro', 0))
      els.map((e, i) => cl(`${body} .cv .cw .${e}`, (i < 2 ? (i == 1 ? 'p' : '') + arr[0] : arr[1]) + 'ElementBro'))
    }
    hbtns.map(e => none(`${body} .bc .${e}`, 0) | (el = $(`#fv #${e}Btn`),
      el && evt(el, "mouseover", () => cl(page, `fw ${e}`)) |
      evt(el, "click", () => (/(i|e)m/i.test(e) && cl(page, 'fy')) |
        cl(page, `fw ${e}`, 0) | self.info()) |
      evt(el, "mouseleave", () => cl(page, `fw ${e}`, 0))))
  },
  privacy: async function () {
 !$("script#privacy") && cS("privacy", () => privacy && ($('#av .bb').innerHTML = privacy));
  },
  extenstion: () => {
    let arr = ['at', 'l', 'ax'];
    console.log("Checking for Extenstion...");

    if ($('html.exinside')) {
      arr.splice(1, app.pro ? 1 : 2).map((e, i) => (el = $(`#${e} .w>.bb`), cl(el, 'fq') |
        (el.innerHTML = inh({
          l: `https://www.element-remover.web.app/?s=${["statistics", "pro"][i]}`,
          n: "www.element-remover.web.app",
          i: i ? "Ads can't be shown in Extenstion Web Page [Voliates Extenstion Policy]" : "For Live Demo"
        }))
      ))
    } else {
      if ($('html.exinstalled')) {
        arr.splice(0, 2).map((e, i) => (el = $(`#${e} .w>.bb`), cl(el, 'fr') |
          evt("#n" + e, "click", i ? () => app.info() : () => setTimeout(() => cl("html", "exinsidestats"), 3000)) |
          el.appendChild(create("div", 'fs', i == 0 ? inh({
            l: "",
            n: "element-remover/web.html?s=statistics",
            i: "Opening Statistics Page"
          }) : inh({
            l: "",
            n: "User to click on Element Remover Extenstion Icon",
            r: "Waiting For",
            i: "To Start Live Demo Do a Click on the Icon"
          }), true))))
      } else {
        arr.splice(0, 2).map(e => (el = $(`#${e} .w>.bb`), cl(el, 'fq') | (el.innerHTML += inh({
          l: "https://chrome-extenstion.com/",
          n: "www.chrome-extenstion.com",
          i: "Please Install the Element Remover Extenstion First"
        }))))
      }
      console.log("Extenstion Present", $("html.exinstalled") ? true : false);
    }

    $Arr('.j').forEach(e => evt(e, "mouseover", () => setTimeout(() => e.querySelector('a').click(), 3000)));
    $('html').removeAttribute("class");
  },

  start: function () {
    // Main Things 
    $('style#n').innerHTML = `:root {--ty : translateY(0px); --ih:${window.innerHeight}px;}`

    // Login Events
    evt('.ae', "click", () => (logedIn == null && (logedIn = true)) | cl('#s', 'fn') | setTimeout(() => none('#r'), 500))
    evt('#y', "click", () => auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => (logedIn = false) | $('.ae').click())
      .catch(error => eh(error)))
    evt('#ac', "click", () => $('.ae').click())
    hide(['#r', '.ai .w'])

    this.auth()
    cursor.init()
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

try {
  auth = firebase.auth();
 navigator.onLine && !navigator.userAgentData.mobile || true ? cS("body", () => ($("main").innerHTML = body, console.log("Body Got!") | app.start())) : popup("Web Extenstion is Not Supported") || popup("Device is Offline");
} catch (err) {
  popup(err);
}

// (?<!enc0.*[\r\n]+.*)(((['"])([^'\("]*?)\2)|((`)([^`]*?)\4))

// {([^{}]*?({[^{}]*?})[^{}]*?)*}