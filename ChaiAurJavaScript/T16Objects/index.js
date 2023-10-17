// source:https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16

// singleton

// Objects literals
const mySym = Symbol("Key1")
const JsUser = {
    name:"Rahul",
    age:18,
    "Full name":"Rahul Kumar Mahto",
    location:"Jharkhand",
    email:"kumarrahul",
    isLoggedIn:false,
    isLoggedInDays:["Monday","Saturday"]
}
// console.log(JsUser);
// console.log(JsUser[email]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);                                    
// console.log(JsUser["Full name"]);
JsUser.email="rahul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="kumar@chapgpt.com"
// console.log(JsUser.email);
JsUser.greetingOne=function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());