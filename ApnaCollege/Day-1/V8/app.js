const square=(n) => 
    n*n

console.log(square(3));
const app=setInterval(() => {
    console.log("Hello world");
},2000)
// console.log(app);
// setTimeout(app);
setTimeout(() => {
    clearInterval(id);
},10000)