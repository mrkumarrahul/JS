const student = {
    name:"Rahul",
    age:24,
    english:20,
    math:20,
    physics:50,
    getAvg() {
        let average =(this.english + this.math +this.physics)/3;
        console.log(average);
    }
}
console.log(student.getAvg());
console.log(student.name);
let password=prompt("set your password");
let newPass =password.trim();
console.log(newPass);