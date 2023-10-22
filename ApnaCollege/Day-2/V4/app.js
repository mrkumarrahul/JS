let nums=[1,2,3,4]
let finalValue=nums.reduce((pre,el) => {
    console.log(pre);
    return pre+el;
})
console.log(finalValue);