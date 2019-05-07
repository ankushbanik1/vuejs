
var data = {
    name:"Online web tutor",
    author:"Sanjay"
  };

Vue.component("owt",{
    template:"<div><p>This is called online web tutor markup Channel name: {{ name }}",
    data: function(){
      return {
        name:"Online web tutor",
        author:"Sanjay"
      }
    },
    methods:{
      method1: function(){
         return "This is vue component";
      },
      fireMe:function(){
          this.author = "Sanju";
      }
    },
    computed:{
      computed1: function(){
        return "Simple message";
      }
    }
  });
  
  var myapp1 = new Vue({
    el:"#my-app-1",
    data:{
  
    },
    methods:{
  
    }
  });
  
  var myapp2 = new Vue({
    el:"#my-app-2",
    data:{
  
    },
    methods:{
  
    }
  });