let students=[
    {
        name:"Rahul",
        Roll:34,
        gpa:9.4
    },
    {
        name:"Sanjay",
        Roll:15,
        gpa:7.8
    },
    {
        name:"Gautam",
        Roll:54,
        gpa:5.6
    },
    {
        name:"Suresh",
        Roll:67,
        gpa:8.9
    }
]
let num=[1,2,3,4]
let double=num.map(  (el) => {
    return el*2
})
let square=num.map( (el) => {
    return el*el
})
let per=students.map((el) => {
    return el.gpa*10;
});
let nums=[1,2,3,4,5,6,7,8,9,10]
let even=nums.filter((el) => {
    return (el%2==0)//even ->True
})
let odd=nums.filter((el) => {
    return el%2!=0 
})
let less5=nums.filter((el) => {
    return el<=5;
})