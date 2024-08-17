//program to check weather all the elements are divisible by 10 or not
let nums=[20,40,60,80,10]
let ans=nums.every((el)=>el%10==0)
console.log(ans);
//program to find the minimum among the array elements
function getMin(nums){
  let min=nums.reduce((min,el)=>{
    if(min<el){
      return min;
    }
    else{
      return el;
    }
  });
  return min;
}
console.log(getMin([2,21,43,54,1]));



