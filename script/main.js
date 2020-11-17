// Creare con Vue uno slider che permetta di:
// Scorrere le immagini tramite appositi bottoni
// Selezionare una immagine tra quelle disponibili
const immagini = [
  {'url': 'img/image1.jpg'
  },
  {'url': 'img/image2.jpg'
  },
  {'url': 'img/image3.jpg'
  },
  {'url': 'img/image4.jpg'
  },
];


const myApp = new Vue({
  el: ('#root'),
  data: {
    imageSrc: 'img/image1.jpg',
  },

  methods: {


  }
})
