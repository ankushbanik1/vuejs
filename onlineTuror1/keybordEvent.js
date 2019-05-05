new Vue ({
    el:"#outer",
    data:{
       
    },
    methods:{
        keypressfunction: function(event)
       {
           console.log(event);
       }
       ,
       keyupfunction: function(event)
       {
           console.log(event);
       }
       ,
       keydownfunction: function()
       {
           console.log("keydown..");
       }
    
    }
});