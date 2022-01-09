/* 
It Enable's Ad Sheild in Your Website
1. Copy and Paste this :
    <script async defer src="https://element-remover.github.io/assets/static/js/adshield.js" onload="preventClickers(allowedClicks, resetInDays)"></script>
2. Replace the allowedClicks and resetInDays according to your need in Number
*/
console.log("🤖 AdShield v2.3")
const $all = e => [...document.querySelectorAll(e)],
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
  parnone = el => el.setAttribute("data-shield", true) | (p = el.parentNode, [...p.children].map(e => e.tagName).filter(e => !/ins|script|iframe|style/i.test(e)).length == 0 && parnone(p)),
  // Wait for It
  wfi = async (f, ms = 500, count = -1) => (r = await new Promise(r => setTimeout(r, ms)), (res = f(), res ? res : count == 0 ? null : await wfi(f, ms, count - 1)));


let style = document.createElement("style")
style.innerHTML = `.adsHoverDiv{width:100%;height:100%;position:absolute;cursor:pointer;top:0;right:0;left:0;bottom:0;background:transparent;z-index:4;} [data-shield="true"]{display:none!important}`
document.body.appendChild(style);

async function preventClickers(adClicks = 1, days = 1) {
  try {
    let today = new Date().setHours(0, 0, 0, 0),
      ads = `[aria-label="Advertisement"], [id^='ezoic-ad'], [id^='ezoic'], [id^='ezmob']`.split(",").map(e => e + ':not([data-shield])').join(","),
      key = "hideAds",
      clicks = "clickedAds",
      count = parseInt(cookie(clicks).get || localStorage.getItem(clicks)) || 0,
      value = [cookie(key).get, localStorage.getItem(key)].map(e => parseInt(e)),
      viewed = value.indexOf(today) == -1;

    console.log(" 🍪 CookieValue :", value[0], "\n 🔒 LocalValue  :", value[1], "\n ⏱️ CurrentDate :", today, "\n\n 📋 ClickAllow  :", adClicks, "\n 📸 Clicked Ads :", count);

    // AD Protector and Hider
    function adChecker(arr) {
      if (viewed) {
        arr.map(ad => ad.getAttribute("data-shield") != false && (() => {
          let shield = document.createElement("div");
          shield.setAttribute("class", "adsHoverDiv")
          shield.onclick = () => {
            console.log(" ❤️‍🩹 Shield Clicked :", ad.id, "& Clicks Left :", adClicks - count);
            count != adClicks ? count++ : store(key).set(today, days);
            store(clicks).set(count, days);
            shield && shield.setAttribute("data-shield", true)
          }
          ad.setAttribute("data-shield", false)
          ad.appendChild(shield);
          console.log(" 🛡️ Created Shield :", ad.id);
        })())
      } else {
        // Hide ads
        arr.map(e => e.getAttribute("data-shield") != true && (parnone(e), console.log(" 🥷 Hidden :", e.id)));
      }
    }

    console.log(`🔎 Finding Ads...`);
    let reck = 2;
    for (let i = 1; i < 6; i++) {
      await wfi(() => $all(ads).length > 0, i * 500, parseInt(10 / i)) != null ? adChecker($all(ads)) : reck--;
      if (reck == 0) break;
    }
    console.log(`😍 Relax and Chill!`);
  } catch (err) {
    console.log(err)
  }
}
preventClickers();