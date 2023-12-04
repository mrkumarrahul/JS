// do-while loop
let i=1;
do{
  console.log("Apna College");
  i++;
} while(i<=10)
//for-of-loop
let length=0;
let str="javascript";
for(let i of str)
{
  console.log("The letters in the word Rahul are:",i);
  length++;
}
console.log("The size of the word is",length);
//for-in-loop
let student={
  name:"Rahul kumar Mahto",
  class:"sem3",
  roll_no:"LNCCMCA21009",
  CollegeName:"Lakshi Narayan college of technology"
}
for(let j in student)
{
  console.log("The student details are as follows:",student[j]);
}
let name={
  naam:"Rahul kumar mahto",
  roll_no:307,
  class:"sem 3"
}
console.log("The class I am studying is",);
let str1="   apna College  ";
console.log(str1);
console.log(str1.toUpperCase());
let c=str1.trim();
console.log(c);
let name1="Rahul";
let name2="kumar";
let res=name1+name2;
console.log(res);
let res1=name1.concat(name2);
console.log(res1);
let sl=name1.slice(1,4);
console.log(sl);