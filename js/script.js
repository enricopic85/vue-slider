new Vue({
    el:"#app",
    data:{
        img:['https://www.reterurale.it/flex/images/c/e/2/D.3a4854418244e96b18c8/1.jpg','https://www.museomontagna.org/wp-content/uploads/2020/11/1_PAESAGGIO-DA-CARTOLINA.jpg','https://siviaggia.it/wp-content/uploads/sites/2/2021/02/paesaggi-primavera.jpg','https://images.everyeye.it/img-notizie/40-ore-video-paesaggi-mozzafiato-pianeta-v3-299389-1280x960.jpg','https://ilfotografo.it/wp-content/uploads/2021/11/paesaggio_di_montagna_1630705171-scaled.jpg'],
        currentIndex:0
    },
    methods:{
        nextImg:function(){
            this.currentIndex < this.img.length-1 ?  this.currentIndex++: this.currentIndex = 0;
        },
        prevImg:function(){
           this.currentIndex <= 0 ? this.currentIndex=this.img.length-1 : this.currentIndex--;
        }
    }
})