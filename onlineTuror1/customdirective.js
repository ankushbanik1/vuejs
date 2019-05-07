

Vue.directive("anku",function(el,binding){
    var bind_arg=binding.arg;
    if(bind_arg=="red"){
        el.style.backgroundColor="red";
        el.style.color="white";
        el.style.fontSize="20px";
    }
    if(bind_arg=="blue"){

        var mod=binding.modifiers.change;
        if(mod==true){
             el.style.backgroundColor="blue";
        el.style.color="white";
        el.style.fontSize="20px";
        }else{
            el.style.backgroundColor="green";
            el.style.color="white";
            el.style.fontSize="20px";
        }
       
     
    }    },
   

    
);


var myapp1 = new Vue({
    el:"#my-app",
    data:{
       chanel: "This is custom call",
       count:0
    },
    methods:{
        clickfire(){
            return this.count++;
        }
    }
    
  });