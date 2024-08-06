// function convertArraytoString(arr){
//   return "This is the Element in index:1 "+arr[0]+
//   "This is the Element in index:1"+arr[1]+
//   "This is the Element in index:1 "+arr[2]; 
// }
// let arr=["Rahul","Sanjay","Neha"];
// console.log(convertArraytoString(arr));
function concat(arr){
  let result="";
  for(let i=0;i<arr.length;i++){
    result+=arr[i];
  }
  return result;
}
let arr=["Rahul ","is ","a ","brilliant ","boy"];
console.log(concat(arr));


