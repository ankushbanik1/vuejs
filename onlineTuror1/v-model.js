new Vue ({
    el:"#outer",
    data:{
     mass:"",
     name:"",
     email:"",
     maths:0,
     science: 0,
     english: 0
    },
    methods:{
        character(event) {
            this.mass=event.key;
  
        },
        name(event) {
            this.name=event.key;
  
        },
        email(event) {
            this.email=event.key;
  
        }
        ,
        
    },
computed:{
fullname(){
           return this.name+"   "+this.email;
        },
        totalSubjectMarks: function(){
            return parseInt(this.maths) + parseInt(this.english) + parseInt(this.science);
        }
}
       
});