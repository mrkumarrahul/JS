let nums=[10,20,30,45,50,60,70,80]
let check=nums.every( (el) => {
    return el%10==0;
})
console.log(check);
let num=[10,20,40,50,60,70,80, 90]
let checks=num.every((el) => {
    return el%10==0;
})
let number=[2,3,,9,1,5,7]
let ans=number.reduce((max,el) => {
    if(el<max)
    {
        return el;
    }
    else
    {
        return max;
    }
})
console.log(ans);
