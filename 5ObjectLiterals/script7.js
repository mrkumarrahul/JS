function multipleGreet(func,n){
  for(let i=1;i<=n;i++){
    func();
  }
}
let g=function greet(){
  console.log("Hello");
}
multipleGreet(g,2)
