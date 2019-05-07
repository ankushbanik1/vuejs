new Vue ({
    el:"#outer",
    data:{
       isactive:false
    },
    methods:{
        toggle:function(){
            this.isactive=!this.isactive;
        }
    }
});