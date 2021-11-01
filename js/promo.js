const promoObj = {
  websites: [{
      info: 'Doing Tasks',
      link: 'tasktudo.web.app',
      img: 'ik.imagekit.io/downlaod/task2_zvRRigyoOSB.jpg',
      paid: true,
      title: 'Task Tu Do'
    },
    {
      paid: true,
      title: 'Paget Projects',
      link: 'www.paget96projects.com',
      img: 'i.ytimg.com/vi/ZmcBC9-wAXM/hq720.jpg',
      info: 'Paget Projects'
    },
    {
      info: 'Converting Seconds',
      link: 'seconds-converter.web.app',
      img: 'ik.imagekit.io/downlaod/seconds-converter.web.app_FE-BXyxSi.jpeg',
      paid: false,
      title: 'Seconds Converter'
    }
  ],
  videos: [{
    paid: false,
    views: 2,
    by: 'Anti Coder',
    src: 'https://www.youtube.com/embed/PzmNssVLcLQ'
  }, {
    paid: true,
    views: 0,
    by: 'Danijel Markov',
    src: 'https://www.youtube.com/watch?v=jVdDa5ksyrY'
  },
  {
    paid: false,
    views: 1,
    by: 'Anti Coder',
    src: 'https://www.youtube.com/embed/DMRRC0rwO_I'
  },{
    paid: false,
    views: 5,
    by: 'Anti Coder',
    src: 'https://www.youtube.com/embed/za4Q_7gYyS4'
  },{
    paid: true,
    views: 20,
    by: 'Anti Coder',
    src: 'https://www.youtube.com/embed/ZmcBC9-wAXM'
  }].map(e => (e.src += "?enablejsapi=1&autoplay=0&hl=en&autohide=1&controls=1&modestbranding=1", e))
}