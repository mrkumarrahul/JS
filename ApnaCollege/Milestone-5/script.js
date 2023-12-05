function add(x,y)
{
  let sum=x+y;
  return sum;
}
console.log(add);
// arrow function
let y=5;
let result=(x,y)=>{
  return x+y;
}
let multiplication=(x,y)=>{
  return x*y;
}
let printHello=()=>{
  console.log("Hello");
} 
//forEach method
let arr=[11,22,43,54]
arr.forEach(function(el) {
  console.log(el);
})
let names=["Rahul","sanjay","Rohan","sohan"];
names.forEach(function(val,idx,a) {
  console.log(val.toLowerCase(),idx,a);
})
let numbers=[2,3,4,5,6,7,8,9];
numbers.forEach(function(val){
  console.log(val*val);
})
//map method
let nums=[67,42,56]
let a=nums.map((val) => {
  return val*val;
})
console.log(a);
//filter method
let nums1=[1,2,3,4,5,6,7,8,9,10];
let b=nums1.filter((val)=>{
 return val%2==0;
})
console.log(b);
//reduce method
let num2=[1,2,3,4,5];
const c=num2.reduce((res,val)=>{
  return res+val;
})
console.log(c);
//--------------------------------------
num3=[11,43,56,32,44,59,65]
let c1=num3.reduce((res,val)=>{
  return res > val ? res:val;
});
console.log(c1);
//practice question
let marks=[34,91,67,98,93,90,76,89]
let c3=marks.filter((val) => {
  return val>90;
})
console.log(c3);
//---------------------------------------------
let p=prompt("Enter a number");
let arr4=[];
for(let i=1;i<=p;i++)
{
 arr[i-1]=i;
}
console.log(arr4);