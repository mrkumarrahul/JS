//arithmetic operators
let a=15;
let b=10;
console.log(`${a}+${b}=`, a+b);
console.log(`${a}-${b}=`, a-b);
console.log(`${a}/${b}=`, a/b);
console.log(`${a}%${b}=`, a%b);
console.log(`${a}to the power${b}=`, a**b);
console.log(`${a}%${b}=`, a%b);
console.log("a++=",a++);
console.log("++a=",++a);
console.log("--a=",--a);
console.log("a--=",a--);
console.log(a);
// assignment operator
let x=10;
let y=5;
x +=5;
console.log(x);
y -=5;
console.log(y);
x%=2
console.log(x);
// comparison operator
let c="3";
let d="3";
let e=5;
let f="101";
console.log("Is c is equal to d",c==d);
console.log("Is c is not equal to d",c!=d);
console.log("c==d",c==d);
console.log("c===d",c===d);
console.log("e==f",e==f);
// logical operator
let g=11;
let h=10;
console.log("g&&h",g>h&&g!=h);
//ternary opertor
let age=18;
let result=age>=10?"adult":"not adult";
console.log(result);
// let name=prompt("Enter your name");
// console.log(name);
// let num=prompt("enter a number");
// if(num%5===0)
// {
//   console.log("yes the number is multiple of 5");
// }
// else{
//   console.log("No , the number is not multiple of 5");
// }
let marks=prompt("enter your marks");
if(marks>=80&&marks<=100)
{
  console.log("Marks obtained Grade:A");
}
if(marks>=70&&marks<=79)
{
  console.log("Marks obtained Grade:B");
}
if(marks>=60&&marks<=69)
{
  console.log("Marks obtained Grade:C");
}
if(marks>=50&&marks<=59)
{
  console.log("Marks obtained Grade:E");
}
if(marks>=0&&marks<=49)
{
  console.log("Marks obtained Grade:F");
}