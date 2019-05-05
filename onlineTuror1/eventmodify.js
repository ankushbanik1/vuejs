new Vue ({
    el:"#outer",
    data:{
       counter:0
    },
    methods:{
       increament(x){
           this.counter+= x;
       },
       sumbitclick(){
           console.log("sumbited");
       
    },
    sumbitclickme(){
        console.log("sumbited");
       
    },
    btnclick(){
        console.log(" not submited");
       
    }
    }
});