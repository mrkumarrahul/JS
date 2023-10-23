let arr=[3,5,2,5,7,9]
// let max=-1;
// for(let i=0;i<=arr.length;i++)
// {
//     if(max<arr[i])
//     {
//         max=arr[i];
//     }
// }
// console.log(max);
let result=arr.reduce((max,el) => {
    if(el>max)
    {
        return el;
    }
    else{
        return max;
    }
})
// console.log(result);