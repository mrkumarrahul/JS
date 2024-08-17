let nums=[1,2,3,4]
let finalVal=nums.reduce((res,el)=>{
  return res+el;
})
console.log(finalVal);

let num=[1,4,12,15,3]
let max=num.reduce((max,el)=>{
  if(max<el){
    return el;
  }
  else{
    return max;
  }
})
console.log(max);

