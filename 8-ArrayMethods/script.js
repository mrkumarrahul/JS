let num=[1,2,3,4]

let double=num.map((el)=>{
  return el*el;
})
console.log(double);
let students=[
  {
    name:"Rahul",
    marks:95,
  },
  {
    name:"Shradha",
    marks:94.8,
  },
  {
    name:"Sohan",
    marks:98,
  }
]
let gpa=students.map((el)=>{
  return el.marks/10;
});
console.log(gpa);

