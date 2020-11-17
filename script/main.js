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
    imageSrc: immagini.map(e => e.url),
    imageIndex: 0,
  },

  methods: {
    forward: function(){
      if (this.imageIndex === this.imageSrc.length - 1) {
        this.imageIndex = 0;
      } else this.imageIndex ++
    },
    back: function(){
      if (this.imageIndex === 0) {
        this.imageIndex = this.imageSrc.length - 1;
      } else this.imageIndex --
    }


  }
})
