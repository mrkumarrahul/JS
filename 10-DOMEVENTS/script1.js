// let btn=document.querySelector("button");
// btn.onclick()=function(){
//   console.log("button was clicked");
  
// }
//-------------------------------------------------------------------
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//   btn.onclick=sayHello;
// }
// function sayHello(){
//   alert("Hello");
// }
//-------------------------------------------------------------------
let btns=document.querySelectorAll("button");
for(btn of btns){
  btn.addEventListener("click",sayHello);
  btn.addEventListener("click",sayName);
}
function sayHello(){
  alert("Hello");
}
function sayName(){
  alert("Rahul");
}