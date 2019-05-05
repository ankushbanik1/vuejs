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
       },
       keydownspace: function()
       {
           console.log("keydown..");
       },
       keycode: function()
       {
           console.log("A is printing..");
       }
    
    
    }
});