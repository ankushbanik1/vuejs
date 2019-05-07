new Vue ({
    el:"#outer",
    data:{
     
      counter:0
    },
    methods:{
        inp (event){
            this.counter=event.key
        }
      
    }
});