/* It Enable's Ad Sheild in Your Website
 - Copy and Paste this :
     <script async defer src="https://element-remover.github.io/assets/static/js/adshield.js"></script> 
*/
console.log("AdShield v0.3")
const $all = e => [...document.querySelectorAll(e)],
  // Cookie Getter and Setter
  cookie = (key, obj = {}) => (document.cookie.match(/[^ =]+=[^ =;]+/g).map(e => e.split("=")).map(e => obj[e[0]] = e[1]), {
    all: obj,
    get: obj[key],
    set: (v, exp) => (document.cookie = `${key}=${v}; expires=${new Date(new Date(new Date().setDate(new Date().getDate() + exp)).setHours(0, 0, 0, 0)).toUTCString()}; path=/`, console.log("Cookie Set"))
  }),
  parnone = el => (p = el.parentNode, el.childElementCount == 1 ? parnone(p) : p.style.display = "none"),
  // Wait for It
  wfi = async (f, ms = 500) => (r = await new Promise(r => setTimeout(r, ms)), (res = f(), res ? res : await wfi(f, ms)));


let style = document.createElement("style")
style.innerHTML = `.adsHoverDiv{width:100%;height:100%;position:absolute;top:0;right:0;left:0;bottom:0;background:transparent;z-index:4;}`
document.body.appendChild(style);

async function preventClickers(adClicks, days) {
  try {
    let count = adClicks,
      points = [],
      today = new Date().setHours(0, 0, 0, 0),
      ads = `[aria-label="Advertisement"], .header-ad`,
      key = "hideAds",
      value = [cookie(key).get, localStorage.getItem(key)].map(e => parseInt(e)),
      viewed = value.indexOf(today) == -1

    console.log("CookieValue :", value[0]);
    console.log(" LocalValue :", value[1]);
    console.log("      Today :", today);

    // AD Protector and Hider
    function adChecker(arr) {
      if (viewed) {
        arr.map(ad => !ad.getAttribute("data-shield") && (() => {
          let shield = document.createElement("div");
          shield.setAttribute("class", "adsHoverDiv")
          shield.onclick = function(e) {
            count--;
            count > 0 ? points.push(e) : localStorage.setItem(key, today) | cookie(key).set(today, days);
            console.log("=> Ad Clicked  :", ad.id, "\n   Clicks Left :", count);
            console.log("   Shield      :", shield);
            shield && (shield.style.zIndex = -2)
          }
          ad.setAttribute("data-shield", true)
          ad.appendChild(shield);
          console.log("Shield :", ad.id);
        })())
      } else {
        // Hide ads
        arr.map(e => e.style.display != "none" && (parnone(e), console.log(e.id, "is [Hidden]")));
      }
    }

    await wfi(() => $all(ads).length > 0)
    let arr = $all(ads)
    len = arr.length;
    adChecker(arr);
    for (let i = 0; i < 3; i++) {
      await wfi(() => true, 3000);
      len != $all(ads).length && adChecker($all(ads));
    }
  } catch (err) {
    console.log(err)
  }
}
preventClickers(1, 1)