 var vue=new Vue ({
    el:"#outer",
    data:{
        x:0,
        y:0
     
    },
    methods:{
        mouseover(event){
             this.x=event.offsetX;
            this.y=event.offsetY;
            
        },
        mouseover1(){
            console.log("its mouseover");
        },
        mouseout2(){
            console.log("its mouseout");
        }
    }
});