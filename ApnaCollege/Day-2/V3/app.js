let arr=[2,4,6,8,10];
let arr1=[1,3,5,7,9];
let even=arr.every( (el) => {
    return el%2==0
})
let odd=arr1.some( (el) => {
    return el%2!=0
})
console.log(even);
console.log(odd);