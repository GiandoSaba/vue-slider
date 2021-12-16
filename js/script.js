// Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.
    
// Bonus:
// 1 - al click su uno dei pallini mostrare l’immagine in posizione corrispondente
// 2 - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3 - quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

const app = new Vue({

    el: '#app',
    data: {
        counter: 0,
        images: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg'
        ],
    },
    methods: {
        next: function(){
            this.counter++;
            if(this.counter == this.images.length) {
                this.counter = 0;
            }
        },
        prev: function(){
            this.counter--;
            if (this.counter < 0) {
                this.counter = this.images.length - 1 ;
            }
        }
    },
    created() {
        setInterval(() => {
            this.next();
        }, 3000)
    }
});