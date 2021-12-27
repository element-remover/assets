// Common Variables
let db, player,
  ref = {
    svr: "https://element-remover.herokuapp.com"
  };

const exts = ["https://microsoftedge.microsoft.com/addons/detail/dodpaldpagolkomadahoenlolmighoog"];
let which = 0;
window.location.href.split(/[&?]/).filter(e => e.match("=")).map(e => (o = e.split("="), (ref[o[0]] = o[1])))
const wfi = async (f, s = "Something Got!", w = "Something", ms = 500, c = -1) => (r = await new Promise(r => setTimeout(r, ms)), (res = f(), res || c == 0 ? (console.log(s), res) : (console.log("Waiting for", w + "..."), await wfi(f, s, w, ms, c - 1))));
console.log(ref);

// Basic Functions
const $ = e => typeof e === "string" ? document.querySelector(e) : e,
  $Arr = e => document.querySelectorAll(e),
  $i = e => $("#" + e),
  $p = (e, c) => c == 0 ? e : $p($(e).parentNode, c - 1),
  cl = (el, cls, w = 1) => $(el) && (l = $(el).classList,
    l && cls.replace(/ +/g, " ").split(" ").map(c => w ? l.add(c) : l.remove(c))),
  evt = (el, w, func, aor = 1) => (e = $(el), aor ? e.addEventListener(w, func) : e.removeEventListener(w, func)),
  reveal = (el, t = 400, s = " ") => $Arr(el + s + '.fr').forEach((e, i) => setTimeout(() => {
    cl(e, 'fs');
    cl(e, 'fr', 0);
    setTimeout(() => cl(e, 'fs', 0), 500);
  }, t * i)),
  hide = arr => arr.map(e => $Arr(`${e}>*`).forEach(el => cl(el, 'fr'))),
  none = (el, c = 1) => cl(el, 'aa', c),
  vanish = (id, con = 1) => {
    let el = $(id)
    cl(el, 'fs', !con);
    cl(el, 'fr', con);
    el.style.height = el.height + "px";
    setTimeout(() => cl(el, 'gk', con) | (el.style.height = 0) | el.removeAttribute("style"), 500);
  },

  promote = () => !app.pro && app.tasks.promo() | evt("#n" + 'ak', "click", promote, 0),

  create = (tag, cl, text = "", html = 0, et, func) => {
    el = document.createElement(tag)
    el.setAttribute("class", cl)
    el[html ? "innerHTML" : "innerText"] = text
    et && evt(el, et, func);
    return el
  },
  cS = (id, func, src = null, async = false, ano = false) => {
    e = document.createElement("script"),
      e.id = id,
      e.src = src ? src : `https://element-remover.github.io/assets/js/${id}.js`,
      e.onload = func;
    async &&(e.async = true);
    ano && (e.crossOrigin = "anonymous")
    $("head").appendChild(e)
  },
  toggle = (el, c) => cl(el, c, !$(el).classList.contains(c)),
  time = [2592E5, 5184E5, 72576E5],
  inh = o => create("div", 'fx', `<div class='eo'><span class='ep'></span><div class='o'>${o.r}</div><a ${o.l ? `href="${o.l}"` : ``}>${o.n}</a><div class='bw'>${o.i}</div></div>`, 1),
  inhe = (e, o) => {
    let ex = $(`${e} .eo`)
    ex.querySelector('.o').innerText = o.r || " ";
    (a = ex.querySelector('a'), (o.l ? (a.href = o.l) : a.removeAttribute("href")) | (a.innerText = o.n || " "))
    ex.querySelector('.bw').innerText = o.i || " ";
  },

  // Logging
  log = (text, obj = "", color = 0, design = 0) => console.log(...obj != "" || color || design ? [`%c${["", "-->", "~~>", "==>", "=>>", "*", "  >="][design]} ${text}`,
    `color : ${["white", "green", "yellowgreen", "yellow", "blue", "orange", "pink", "red", "springgreen", "cyan", "darkorchid"][color]}`, obj
  ] : [text]),
  popup = (text, color) => {
    if (!$('.gt')) {
      let mesbox = create("div", 'fm');
      let mes = create("div", 'f l gt fk', text)

      evt(mesbox, "mouseover", () => setTimeout(() => cl('.gt', 'fl', 0), 50))
      mesbox.appendChild(mes)
      $('main').appendChild(mesbox)
    }

    let el = $('.gt')
    el.innerHTML = `<span>${text}</span>`
    color && (el.style.background = color);
    cl(el, 'fk fl', 0)
    setTimeout(() => cl(el, 'fk fl'), 50)
  },
  title = e => e.split(/-|\/| /).map(e => e.replace(/(\w)(?=\w{2,})/, e => e.toUpperCase())).join(' '),
  eh = err => console.log(err) | popup(title(err.code)),
  cursor = {
    d: 9,
    x: 0,
    y: 0,
    ex: (window.innerWidth / 2),
    ey: (window.innerHeight / 2),
    dot: $('#eq'),
    back: $('#er'),

    init: function () {
      this.events();
      this.animate();
    },

    events: function () {
      var self = this;

      ["a", "button", '.be', '.gm', 'img', `[role="button"]`].map(e => $Arr(e).forEach(el =>
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
      evt(document, "click", () => $('.czk') && self.toggleCV(0) | setTimeout(() => self.toggleCS(), 400))
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
      cl(self.dot, 'gs', con);
      cl(self.back, 'gs', con);
    },

    toggleCV: function (con = 1) {
      var self = this;
      cl(self.dot, 'gr', con);
      cl(self.back, 'gr', con);
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
  ccc = () => app.pro && cl($p('#cg', 4), 'fz', [...app.tools.get()].splice(0, 2).map(e => parseInt(e)).reduce((a, b) => a + b) == 0),
  ppt = e => cl($p(e.target, 4), 'fz', !app.pro),
  tsu = async () => await base.online() | data(app.tools.get()).update();

// App Initilized
const app = {
  isExt: window.location.protocol !== "http:",
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
  setUser: async function (u) {
    let c = u.member
    c && (this.su = [u.card, u.id].join(":"));
    (r = await app.send("id", c ? false : true, c ? 1 : 0), (r.w && (u.w = r.w), !c && (u.id = r.id)));
    this.user = u
    this.account.set(u);
    !c && (this.su = [u.card, u.id].join(":"));
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
    arr: ['au', 'aw'],
    init: function (user, data) {
      this.set(user);
      console.log("* Account Plan :", app.pro);
      this.timer.stop()
      setTimeout(() => app.pro && this.timer.init(data), 1300)
    },
    set: function (user) {
      this.arr.map((e, i) => $(`.at.${e}`).innerText = user[this.keys[i]])
      none('.ar.aw', !user.email)
      none('.x.ax', !user.trust)

      $Arr('.ay .az .be').forEach((el, i) => {
        cl(el.parentNode, 'bj', i == app.pro);
        text = i < app.pro ? "Unlocked" : i > app.pro ? "Get" : "";
        el.innerText = i ? text : "Unlocked";
      });
      $('.bf').innerText = `Ends in ${(app.user.member ? 6 : 3) + " Days"}`
    },
    timer: {
      plan: null,
      from: null,
      button: null,
      member: null,
      s: 0,
      init: function (data) {
        this.button = $('.ay .az.bj .be');
        this.member = $('#do');
        this.plan = data.plan;
        this.from = data.from;
        this.start();
        this.s = 0;
        console.log("  >= Timer :\n", data);
      },
      start: async function () {
        let self = this;
        if (this.plan != 0 && this.from != null) {
          let diff = Math.abs(new Date(this.from) - new Date()),
            end = time[this.plan],
            text;
          if (diff < end) {
            text = this.getms(end - diff);
            if (!this.s)
              setTimeout(() => this.start(), 1000)
            else
              return (self.s = 0, console.log("Timer Stopped!"));
          } else {
            text = "Expired"
          }
          this.button.innerText = text
          this.member.innerHTML = text[0] === "E" ? `<no class='gg'>Expired</no>` : text.replace(/ /g, "").split(":").reverse().map((e, i) => `<no>${e}</no><span>${["second", "minute", "hour", "day"][i] + (ep = parseInt(e), ep != 1 && ep ? "s" : "")}</span> `).reverse().reduce((a, b) => a + b)
          text[0] === "E" && ("",


            await app.send("") | $("#n" + 'ak').click()

          )
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
    arr: ['#ca', '#cc', '#cd', '#ce', '#cf', '#cg'],
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
    div: ['#dv', '#dw', '#dx'],
    con: ['dd', 'df', 'dl'],
    init: async function (obj) {
      await base.online();
      this.blocks();
      this.set(obj);
      Object.values(obj).reduce((a, b) => a + b) === 0 && app.send("");

      console.log("* Tasks :", obj);
    },
    set: function (obj) {
      return this.keys.map((el, i) => {
        let e = obj[el] != undefined ? obj[el] : this.values[i];
        (i != 1 || !$('.gh')) && vanish(`.${this.con[i]}`, !e);
        this.values[i] = e;
        $(this.div[i]).innerText = app.pro ? "" : e ? `${e + (i ? "s" : "")} left` : ""
        cl($(this.div[i]).parentNode, 'gp', !e || app.pro);
        return e
      })
    },

    promo: async function () {
      let cv = app.ads.watch,
        cw = app.ads.surf;

      // For Ads
      app.ads.ad && (async () => {
        console.log("Creating Ads");
        await wfi(() => earn.active, `Ads are ready to Show!`, `Google Ads`);
        [{
          n: "alpha",
          s: "2153949148"
        }, {
          n: "beta",
          s: "8811706890"
        }, {
          n: "gama",
          s: "9550073496"
        }, {
          n: "deta",
          s: "5793827168"
        }].map(e => ($('#de').appendChild(create("div", 'dv', `<!-- ${e.n} --><ins class="adsbygoogle" style="display:block" data-ad-client="${earn.id}" data-ad-slot="${e.s}" data-ad-format="auto" data-full-width-responsive="true"></ins></div>`, true), ""))).map(e => (adsbygoogle = window.adsbygoogle || []).push({}))
      })()

      if (cv || cw) {
        let res = await app.send("promo");

        if (cv) {
          let video = res.watch[0]
          cl('.df', 'gk fr', 0);
          $('#dg iframe').src = `https://www.youtube.com/embed/${video.src}?enablejsapi=1&modestbranding=1`
          $('#dg .di').innerText = video.views
          $('#dg .dj').innerText = video.by
          $('#dg .dk').innerText = video.paid
          this.watchBox.init(video.id);
        }

        if (cw) {
          cl('.dl', 'gk fr', 0);
          $('#dm').innerHTML = "";
          res.webs.map(site => $('#dm').appendChild(create("div", 'gl',
            `<div class='gm'><img data-src="https://element-remover.github.io/assets/static/svg/logo.svg" src="https://ik.imagekit.io/downlaod/${site.img}?tr=w-600h-300" alt="${site.info}"></div><a href="https://${site.link}/?ref=element-remover-${app.su}&svr=${ref.svr}&id=${site.id}"  alt="${site.info}'s Website" target="_blank"` +
            `class='gn'></a><div class='bc'><div class='da'><div class='z'>${site.title}</div></div>${site.paid ? `<div class='go'><span class='dk'></span></div>` : ``}</div>`, true)))
        }
      }
    },
    watchBox: {
      evt: ['unstarted', 'gj', 'gh', 'gi', 'buffering', 'cued'],
      state: 'aa',
      wc: 0,
      key: "",
      init: function (id) {
        this.id = id
        cS('iframe-demo', () => console.log("Watch Box Inite."), "https://www.youtube.com/iframe_api")
      },
      ready: function (v) {
        v = new YT.Player('dh', {
          events: {
            "onReady": () => console.log("Player Ready") | this.watch(),
            "onStateChange": state => (w = this.evt[state.data + 1], (this.state = w) | cl('#dg', w) | cl('#dg', this.evt.filter(e => e != w).join(" "), 0)),
            "onError": () => cl('#dg', 'error')
          }
        });
      },
      watch: async function () {
        let self = this;
        if (self.state == 'gh') {
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
        return this.state == 'gi' ? vanish('.df') : setTimeout(() => this.none(), 2000);
      }
    },

    blocks: function () {
      app.pro && cl('#ak > .i > .ao', 'ex', 0);
      cl('.db', 'gf', app.pro);
      none('#da .dn', !app.pro)
      none('.dc', app.pro);
      none('.dp', app.pro == 2);
      $('.db').innerHTML = app.pro ? `<span class='ar'>Pr${app.pro == 1 ? "o" : "emium"} Membership Activated</span>` : `Complete Tasks to Become Pro Member for ${(app.user.member ? 6 : 3) + " Days"}.`
    }
  },
  statistics: function () {
    !$("script#stats") && cS("stats", () =>


      $("body").appendChild(create("data", "stats")) | wfi(() => (e = $("data.stats").innerText, e != "" ? ($("data.stats").remove() | design.init(JSON.parse(e).stats), true) : false), "Statistics Got!", "Statistics from Extension", 2000, -1)

    );
    console.log("Currently in Development!");
  },

  info: {
    count: 0,
    area: false,
    body: '#bw DIV.i .ao',
    btns: ['cq', 'cr', 'cs', 'cu', 'ct', 'cx', 'cy', 'cz'],
    main: '#hd',
    els: ['cj', 'ck', 'bj'],
    hlter: [
      ['gy', 'gx', 'gz'],
      ['hb', 'ha', 'hc']
    ],
    capture: async function () {
      let self = this;
      if (!self.count) {
        self.count = 1;
        let exa = await wfi(() => !self.area ? (el = $('#gb'), el ? (self.area = true, el) : false) : false, "Exarea Got!", "User Click")

        self.page = $(`${self.body} .bg`);
        self.page.insertBefore(exa, $(`${self.body} .ap`))
        cl(self.body, 'fw', 0);
        $(`${self.body} .fx`).remove();

        self.show()
      }
    },
    show: async function () {
      let self = this,
        btns = [...self.btns],
        hbtns = [],
        submit;

      !$(self.main) && await new Promise(r => setTimeout(r, 1200));
      $(self.main) && $('#bw .ap').setAttribute("style", `height : ${window.getComputedStyle($(self.main)).height}; margin: 1em 0 0`);
      $Arr('#gb ' + "[id]").forEach(e => !self.main.match(e.id) && hbtns.push(e.id));
      hbtns.map(e => (i = btns.indexOf(e), i != -1 && btns.splice(i, 1)));
      btns.map(el => none(`${self.body} .ap .${el}`));
      submit = $('#cu');
      cl(self.page, 'ge', $('#cy') || submit);
      cl(`${self.body} .ch .ci`, 'fs', submit);
      if (submit) {
        let [bts, bth] = submit.querySelector('.hi').innerText == "Submit" ? ['cv', 'cw'] : ['cw', 'cv'];
        cl(`${self.body} .ap .${bts}`, 'fs', 0)
        none(`${self.body} .ap .${bts}`, 0);
        cl(`${self.body} .ap .${bth}`, 'fs', 0)
        none(`${self.body} .ap .${bth}`);
        setTimeout(() => cl(`${self.body} .ap .${bts}`, 'fs'), 600);
        let arr = self.hlter[bts == 'cv' ? 0 : 1],
          arr2 = self.hlter[bts != 'cv' ? 0 : 1];
        self.els.map((e, i) => cl(`${self.body} .ch .ci .${e}`, arr2[i], 0) | cl(`${self.body} .ch .ci .${e}`, arr[i]))
      }
      hbtns.map(e => none(`${self.body} .ap .${e}`, 0) | (el = $(`#gb #${e}`),
        el && evt(el, "mouseover", () => cl(self.page, `gc ${e}`)) |
        evt(el, "click", () => (/(i|e)m/i.test(e) && cl(self.page, 'ge')) |
          cl(self.page, `gc ${e}`, 0) | self.show()) |
        evt(el, "mouseleave", () => cl(self.page, `gc ${e}`, 0))))
    }
  },


  start: async function () {
    await base.check(0)
    await base.online($('.en .bw'), "Initializing...");

    firebase.initializeApp({
      apiKey: "AIzaSyCQlUfWw68F-AeUrsHfEUTm7LkBUkhHxbE",
      authDomain: "element-remover.firebaseapp.com",
      projectId: "element-remover",
      databaseURL: "https://element-remover.firebaseio.com",
      storageBucket: "element-remover.appspot.com",
      messagingSenderId: "524051898519",
      appId: "1:524051898519:web:9e8f4351873618e97309d2",
      measurementId: "G-4CJK789HHC"
    });
 (navigator.userAgentData && !navigator.userAgentData.mobile) ? this.auth.init() : popup("Web Extension is Not Supported") | ($(".downloading").innerHTML = "");
  },
  auth: {
    auth: null,
    logedIn: null,
    init: async function () {
      await base.check(1)
      this.auth = firebase.auth();
      // Login Events
      evt('.r', "click", () => (this.logedIn == null && (this.logedIn = true)) | cl('#e', 'fr') | setTimeout(() => none('#d'), 500))

      evt('#k', "click", () => this.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => (this.logedIn = false) | $('.r').click() | $("body").appendChild(create("data", "idToken", res.credential.idToken)))
        .catch(error => eh(error)))

      evt('#p', "click", () => $('.r').click())
      hide(['#d', '.v .i']);
      ['.bh .bi', '.bl .bu .bv', '.bl .bm .bn', '.bl .bo', '.ah .aq .as', '#av', '#ax'].map(b => $Arr(b).forEach(e => e.setAttribute("role", "button")))
      cursor.init();
      this.in();
    },
    in: async function () {
      // Authorization
      let self = this;
      self.auth.onAuthStateChanged(async su => {
        let w = 0;
        cl('main', 'c', 0);

        let cdl = true;
        if (ref.log) {
          let [what, token] = ref.log.split(":");
          if (what == "in" && !su) {
            cdl = ("",


              ($('.en').remove() | setTimeout(() => none('#e', 0) | reveal(['#d']), 200), await wfi(() => self.logedIn != null && {
                log: self.logedIn
              }, "User Loged In", "User to Login").then(res => res.log))

            )
          } else if (what === "out" && su) {

            self.out();
          }
        }

        if (cdl) {
          none('#d')

          let u = !su ? {
            card: "user",
            member: false,
            id: null,
            email: null,
            trust: 0
          } : {
            card: "member",
            member: true,
            id: su.uid,
            email: su.email,
            trust: su.emailVerified
          };
          await app.setUser(u);
          console.log(`User : \n`, app.user);
          console.log("Getting User Info...");
          (el = $('.en .bw'), el && (el.innerText = "Getting User Data..."));
          app.user.w && none('.v .aa', 0);

          let h = new Date().getHours();
          app.user.member && popup(`${h > 22 || h < 5 ? "It's time to Sleep" : (h < 12 ? "Good Morning": h < 18 ? "Good Afternoon" : "Good Evening")}, ${title(su.displayName)}`, "#e2bcb7");

          await base.check(2)
          db = firebase.firestore().collection("account").doc(app.user.card).collection(app.user.id)

          // For Changes
          snap = db.onSnapshot(snap => snap.docChanges().forEach(change => console.log(change.type) | app.update(change.doc.data())), err => console.log(err));

          await wfi(() => ((el = $('.en .bw'), el && (el.innerText = "Getting User Data...")), !app.whole), "User Data Got!", "User Data")
          app.activate();
        }
      })
    },
    out: function () {
      return this.auth.signOut()
        .then(() => popup("You loged Out!", "#fca3cc") | window.location.assign("?log=in"))
        .catch(err => eh(err))
    }
  },
  activate: () => {
    let slides = ['af', 'ag', 'ah', 'ai', 'bw', 'ak', 'al'],
      sides = ["account", "statistics", "tools", "privacy", "info", "pro", "dev"],
      wsc = '.v .i',
      nav = '.ab .ac',
      sc = '.am .g .an';
    const opening = () => setTimeout(() => none('.v') | reveal(nav, 200) | setTimeout(() => $(`#n` + (a = sides.reduce((a, b, i) => b == ref.s ? i : a + 0, -1), slides[a > 0 ? a : 0])).click(), 200 * slides.length), 500);

    // Default Main Things
    hide([nav, sc + ">*"]);
    hide([sc, sc + ">*"]);
    $Arr(`${sc}`).forEach((e, i) => (e.id = slides[i]));
    $Arr(`${nav}>*`).forEach((e, i) => (e.id = "n" + slides[i]));

    app.extension()
    evt('#av', "click", evt => (cl(evt.target, 'fh'), setTimeout(() => cl(evt.target, 'fh', 0), 400)) | navigator.clipboard.writeText(evt.target.parentNode.firstElementChild.innerText));
    $Arr('.ay .az .be').forEach((el, i) => i && evt(el, "click", e => e.target.innerText == "Get" && $(`.ab button:nth-child(${5 + i})`).click()))
    evt('#n' + 'ai', "click", () => !$("script#privacy") && cS("privacy", () => policies && ($('#ai .ao').innerHTML = policies)))
    evt('#al .el', "click", () => toggle('#al .g', 'gq'))
    $Arr(`${nav}>*`).forEach(e => evt(e, "click", evt => {
      let el = evt.target,
        pos = Array.from(el.parentNode.children).indexOf(el),
        selected = $(`${nav} .bj`),
        selectpos = selected && Array.from(el.parentNode.children).indexOf(selected);
      if (selectpos != pos) {
        selected && cl(`${nav} .bj`, 'bj', 0);
        cl(el, 'bj');
        let ih = window.innerHeight;
        $('style#a').innerHTML = `:root {--ty : translateY(${ih * -(pos)}px); --ih:${ih}px;}`
        hide([sc, sc + ">*"]);
        reveal(`${sc}:nth-child(${(++pos)})`);
      }
    }));

    (e = $('.en'), e && e.remove())
    console.log("App Activated");

    ref.s ? opening() : evt('.w', "click", () => {
      $('.w').style = `transform: translateY(${-window.innerHeight}px);`;
      opening();
    }) | reveal(wsc, 500);
  },
  extension: async function () {
    console.log("Checking for Extension...");



      let arr = ['ag', 'bw'];
      evt("#n" + 'ak', "click", promote);
      arr.map(e => (el = $(`#${e} .i>.ao`), cl(el, 'fw') | el.appendChild(inh({
        n: "&nbsp;",
        i: "Checking for Extension...",
        r: "&nbsp;"
      }))))
      let res = await wfi(() => $("html.exinstalled") ? 1 : 0, "Extension Present!", "Extension", 2000, 10);
      $('html').removeAttribute("class");
      res ? arr.map((e, i) => evt("#n" + e, "click", i ? () => app.info.capture() : () => app.statistics()) |
          inhe(`#${e} .i>.ao`, {
            r: ["Fetching Statistics From", "Waiting For"][i],
            n: ["Extension", "User to click on Element Remover Extension Icon"][i],
            i: ["Currently in Development!", "To Start Live Demo Do a Click on the Icon"][i]
          })) :
        arr.map(e => inhe(`#${e} .i>.ao`, {
          r: "Redirecting to",
          n: "extension-store/element-remover",
          l: "https://microsoftedge.microsoft.com/addons/detail/element-remover/dodpaldpagolkomadahoenlolmighoog",
          i: "Would you Please Install the Element Remover Extension First",
        }))

      ref.s === 'bw' && app.info.capture()


    $Arr('.eo').forEach(e => evt(e, "mouseover", () => setTimeout(() => e.querySelector('a').click(), 3000)));
  },
  send: async (key, value = 1, user = 1) => {
    let obj = {
      [key]: value
    };
    user && (obj.user = app.su)
    console.log("==>", obj)
    await base.online();
    return await fetch(`${ref.svr}/?d=${JSON.stringify(obj)}`, {
        method: "POST"
      }).then(res => res.json() || res.text())
      .then(res => (console.log("<==", res), res));
  }
};


function onYouTubeIframeAPIReady() {
  console.log("Ready");
  app.tasks.watchBox.ready(player)
}

const base = {
  js: ["app", "auth", "firestore", "analytics"],
  init: async function () {
    $('style#a').innerHTML = `:root{--ty:translateY(0px);--ih:${window.innerHeight}px;}`
    cS("body", () => ($("main").innerHTML = body, console.log("Body Got!")))

    this.js.map((e, i) => (base[e] = false, cS(e, function () {
      base[e] = true;
      this.remove()
    }, `https://element-remover.github.io/assets/static/lib/${e}.js`, i && true)));
    app.start();
  },
  check: async function (e) {
    e = typeof e === "number" ? this.js[e] : e
    return this[e] == false && await wfi(() => this[e], `Firebase ${e} is ready!`, `Firebase ${e}`)
  },
  online: async function (el, next) {
    return !navigator.onLine ? (el && (el.innerText = "Waiting for Internet..."), await wfi(() => navigator.onLine, "Base is Active", "Internet", 1000)) : (el && (el.innerText = next), true)
  }
}

window.location.pathname.match("dashboard") ? base.init() : home() | cursor.init();

// window.history.pushState({}, undefined, "/contact");

async function home() {
  const scroll = () => (window.onscroll = () => (e = scrollY, cl("header", 'gu', e > 63) | window.innerWidth > 446 && none('#et .fb', e < 390) | none('#et .ez', e < 390) | none('#et .fa', e >= 390)))
  scroll()
  window.onresize = () => scroll()

  let dash = $Arr("[href=\"extension\"]")
  dash.forEach(e => e.setAttribute("href", exts[which]))
  $Arr("button, .btn").forEach(e => e.onclick = () => window.location.assign(e.getAttribute("href")))
  let res = await wfi(() => $("html.exinstalled") ? 1 : 0, "Extension Present!", "Extension", 2000, 3);

  res && dash.forEach(e => e.setAttribute("href", "dashboard") | (e.querySelector('.o').innerText = "Open Dashboard"))
}


const earn = {
  id: "ca-pub-5974221028195695",
  active: false,
  init: function () {
    cS("gads", () => (this.active = true), `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=` + this.id, true, true)
  },
  clicked: () => app.send("pro", "0")
};
setTimeout(() => !app.isExt && earn.init(), 3000)
