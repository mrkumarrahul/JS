const student={
    name:"Rahul",
    class:4,
    prop:this,
    getName:function() {
        return this.name;//student scope
    },
    getMarks:() => {
        this.name;//parent scope
    },
    getinfo1:function(){
        setTimeout(()=>{
            console.log(this);//student object
        },2000);
    },
    getInfo2:function() {
        setTimeout(function()  {
            console.log(this);//window object
        },2000);
    },
};