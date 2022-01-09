/* 
It Enable's Ad Sheild in Your Website
1. Copy and Paste this :
    <script async defer src="https://element-remover.github.io/assets/static/js/adshield.js" onload="adShield.init(allowedClicks, resetInDays)"></script>
2. Replace the allowedClicks and resetInDays according to your need in Number
*/
console.log("🤖 AdShield v3.0")
const $all = e => [...document.querySelectorAll(e)],
  today = new Date().setHours(0, 0, 0, 0),
  ads = `[aria-label="Advertisement"], [id^='ezoic-ad'], [class*='ezoic-ad'], [id^='ezoic'], [id^='ezmob']`.split(",").map(e => e + ':not([data-shield])').join(","),
  // Cookie Getter and Setter
  cookie = (key, obj = {}) => (document.cookie.match(/[^ =]+=[^ =;]+/g).map(e => e.split("=")).map(e => obj[e[0]] = e[1]), {
    all: obj,
    get: obj[key],
    set: (v, exp) => (document.cookie = `${key}=${v}; expires=${new Date(new Date(new Date().setDate(new Date().getDate() + exp)).setHours(0, 0, 0, 0)).toUTCString()}; path=/`, console.log(`   🎉 Stored ${key} : ${v}`))
  }),
  local = key => ("", {
    all: localStorage,
    get: localStorage[key],
    set: v => (localStorage[key] = v)
  }),
  store = key => ("", {
    get: local(key) || cookie(key),
    set: (v, e) => cookie(key).set(v, e) | local(key).set(v),
    con: v => [local(key), cookie(key)].filter(e => e != v)
  }),
  adHider = () => $all(ads).map(e => e.getAttribute("data-shield") != true && (parnone(e), console.log(" 🥷 Hidden :", e.id))),
  parnone = el => el.setAttribute("data-shield", true) | (p = el.parentNode, [...p.children].map(e => e.tagName).filter(e => !/ins|script|iframe|style|span/i.test(e)).length == 0 && parnone(p)),
  // Wait for It
  wfi = async (f, ms = 500, count = -1) => (r = await new Promise(r => setTimeout(r, ms)), (res = f(), res ? res : count == 0 ? null : await wfi(f, ms, count - 1)));

async function preventClickers() {
  // AD Protector and Hider
  console.log(`🔎 Finding Ads...`);
  for (let i = 1; i < 200; i++) {
    await wfi(() => $all(ads).length > 0, 5 * i, parseInt(10 / i)) != null && adHider();
  }
  console.log(`😍 Relax and Chill!`);
}

const adShield = {
  init: function (allowedClicks, expiredays){
    let key = "hideAds",
      clicks = "clickedAds",
      adClicks = allowedClicks || 1,
      days = expiredays || 1,
      count = parseInt(cookie(clicks).get || localStorage.getItem(clicks)) || 0,
      value = [cookie(key).get, localStorage.getItem(key)].map(e => parseInt(e)),
      viewed = value.indexOf(today) != -1;

    console.log(" 🍪 CookieValue :", value[0], "\n 🔒 LocalValue  :", value[1], "\n ⏱️ CurrentDate :", today, "\n\n 📋 ClickAllow  :", adClicks, "\n 📸 Clicked Ads :", count);

    this.style();

    if (!viewed) {
      var monitor = setInterval(function() {
        var el = document.activeElement;
        if (el && el.tagName == 'IFRAME') {
          count++;
          console.log(" ❤️‍🩹 AD Clicked :", el.id, "& Clicks Left :", adClicks - count);
          store(clicks).set(count, days)
          count === adClicks && clearInterval(monitor) || store(key).set(today, days) || adHider($all(ads))
        }
      })
    } else {
      preventClickers();
    }
  },
  style: () => {
    let style = document.createElement("style");
    style.innerHTML = `[data-shield]{display:none!important}`;
    document.body.appendChild(style);
  }
}