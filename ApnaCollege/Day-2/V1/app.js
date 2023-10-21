let arr=[1,2,3,4,5];

arr.forEach( function(el) {
    console.log(el);
})
// let print = function(el) {
//     console.log(el);
// };
arr.forEach((el) => {
    console.log(el);
})
let arr1=[
    {
        name:"Rahul",
        Roll:34,
        Marks:98
    },
    {
       name:"Sanjay",
       Roll:45,
       Marks:100
    },
    {
       name:"Rohit",
       Roll:13,
       Marks:89
    }
]
arr1.forEach((student) => {
    console.log(student.Marks);
})