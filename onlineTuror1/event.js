new Vue ({
    el:"#outer",
    data:{
       counter:0
    },
    methods:{
       increament(x){
           this.counter+= x;
       },
       dicreament(y){
        this.counter-=y;
    },
    }
});