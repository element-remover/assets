const $q = e => document.querySelector(e);
const surfAI = {
  wc: [],
  state: "none",
  init: function () {
    let obj = {};
    window.location.href.split(/[&?]/).filter(e => e.match("=")).map(e => (o = e.split("="), (obj[o[0]] = o[1])))

    if (/element\-remover\-/.test(obj.ref)) {
      this.user = obj.ref.replace("element-remover-", "");
      this.server = obj.svr
      this.events()
      this.create()
      this.surf()
    }
  },
  create: () => {
    let div = document.createElement("div");
    div.id = "Timerr"
    div.innerHTML = `<style>
    #Timerr {
      display: flex;
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      border: 0.2rem solid rgba(0, 0, 0, 20%);
      background: rgba(0,0,0,30%);
      color: white;
      width: 4.5rem;
      height: 2rem;
      border-radius: 5rem;
      align-items: center;
      justify-content: center;
      align-content: center;
      z-index: 9999999999;
    }
    </style><div id='erCo'>30 left</div>`
    document.body.appendChild(div);
  },
  send: async function (v) {
    let s = this;
    return await fetch(`${s.server}/?d=${JSON.stringify({
      "pro": v,
      "user": s.user,
    })}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json() || res.text())
      .then(res => (console.log(res), res));
  },
  events: function () {
    let s = this;
    window.addEventListener("mouseover", () => (s.state = "surf"))
    document.addEventListener("mouseleave", () => (s.state = "out"))
  },
  surf: async function () {
    let self = this;
    console.log(self.wc);
    if (self.state == "surf") {
      !self.key && (self.key = self.send(2))
      if (self.wc.length < 31)($q('#erCo').innerText = `${(l = 30 - this.wc.length, l == 0 ? (await self.send(`2:${(await Promise.all([self.key]))[0].key}`), l) : l)}  left`, self.wc.push(1))
      else return $q('#Timerr').remove()
    }
    setTimeout(() => self.surf(), 1000)
  }
}
surfAI.init()