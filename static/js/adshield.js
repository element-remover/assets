/* It Enable's Ad Sheild in Your Website
 - Copy and Paste this :
     <script async defer src="https://element-remover.github.io/assets/static/js/adshield.js"></script> 
*/
console.log("AdShield v0.9")
const $all = e => [...document.querySelectorAll(e)],
  // Cookie Getter and Setter
  cookie = (key, obj = {}) => (document.cookie.match(/[^ =]+=[^ =;]+/g).map(e => e.split("=")).map(e => obj[e[0]] = e[1]), {
    all: obj,
    get: obj[key],
    set: (v, exp) => (document.cookie = `${key}=${v}; expires=${new Date(new Date(new Date().setDate(new Date().getDate() + exp)).setHours(0, 0, 0, 0)).toUTCString()}; path=/`, console.log("Cookie Set"))
  }),
  parnone = el => el.setAttribute("data-shield", true) | (p = el.parentNode, [...p.children].map(e => e.tagName).filter(e => !/ins|script|iframe|style/i.test(e)).length == 0 && parnone(p)),
  // Wait for It
  wfi = async (f, ms = 500, count = -1) => (r = await new Promise(r => setTimeout(r, ms)), (res = f(), res ? res : count == 0 ? null : await wfi(f, ms, count - 1)));


let style = document.createElement("style")
style.innerHTML = `.adsHoverDiv{width:100%;height:100%;position:absolute;cursor:pointer;top:0;right:0;left:0;bottom:0;background:transparent;z-index:4;} [data-shield="true"]{display:none!important}`
document.body.appendChild(style);

async function preventClickers(adClicks, days) {
  try {
    let count = adClicks,
      today = new Date().setHours(0, 0, 0, 0),
      ads = `[aria-label="Advertisement"]:not([data-shield])`,
      key = "hideAds",
      value = [cookie(key).get, localStorage.getItem(key)].map(e => parseInt(e)),
      viewed = value.indexOf(today) == -1

    console.log("CookieValue :", value[0]);
    console.log(" LocalValue :", value[1]);
    console.log("      Today :", today);

    // AD Protector and Hider
    function adChecker(arr) {
      if (viewed) {
        arr.map(ad => ad.getAttribute("data-shield") != false && (() => {
          let shield = document.createElement("div");
          shield.setAttribute("class", "adsHoverDiv")
          shield.onclick = function(e) {
            count--;
            count < 0 && localStorage.setItem(key, today) | cookie(key).set(today, days);
            console.log(" ! Shield Clicked :", ad.id, "& Clicks Left :", count);
            shield && shield.setAttribute("data-shield", true)
          }
          ad.setAttribute("data-shield", false)
          ad.appendChild(shield);
          console.log(" + Created Shield :", ad.id);
        })())
      } else {
        // Hide ads
        arr.map(e => e.getAttribute("data-shield") != true && (parnone(e), console.log(" - Hidden :", e.id)));
      }
    }

    for (let i = 1; i < 6; i++) {
      let ms = i * 500,
        n = parseInt(10 / i);
      console.log(`Finding Ads [at ${ms} for ${n} times]...`);
      await wfi(() => $all(ads).length > 0, ms, n) != null ? adChecker($all(ads)) : console.log(" ;(",null);
    }
  } catch (err) {
    console.log(err)
  }
}
preventClickers(1, 1)