// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
for(let i=0;i<10;i++)
{
  console.log("apna college");
}
let name="Rahul";
let size=0;
for(let i of name)
{
  console.log("The letters of the word are",i);
  size++;
}
console.log('size=',size);
let student={
  name:"Rahul kumar Mahto",
  age:"20",
  cgpa:7.5,
  isPass:true
}
for(let i in student)
{
  console.log("key=",i,"and value=",student[i]);
}
for(let i=1;i<=100;i++)
{
  if(i%2==0)
  {
    console.log(i);
  }
}
let gameNum=25;
let userNum=prompt("Guess a number")
while(userNum!=gameNum)
{
  gameNum=prompt("your Guess is wrong Please guess again")
}
console.log("congratulations your guess is right");