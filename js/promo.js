const promoObj = {
  websites: [{
    info: 'Doing Tasks',
    link: 'tasktudo.web.app',
    img: 'ik.imagekit.io/downlaod/task2_zvRRigyoOSB.jpg',
    paid: true,
    title: 'Task Tu Do'
  }, {
    paid: true,
    title: 'Paget Projects',
    link: 'www.paget96projects.com',
    img: 'i.ytimg.com/vi/ZmcBC9-wAXM/hq720.jpg',
    info: 'Paget Projects'
  }, {
    info: 'Converting Seconds',
    link: 'seconds-converter.web.app',
    img: 'ik.imagekit.io/downlaod/seconds-converter.web.app_FE-BXyxSi.jpeg',
    paid: false,
    title: 'Seconds Converter'
  }],
  videos: [{
    paid: false,
    views: 2,
    by: 'Anti Coder',
    src: 'https://www.youtube.com/embed/PzmNssVLcLQ'
  }, {
    paid: true,
    views: 33,
    by: 'Danijel Markov',
    src: 'https://www.youtube.com/embed/jVdDa5ksyrY'
  }].map(e => (e.src += "?enablejsapi=1&autoplay=0&modestbranding=1", e))
}