let arr=[23,43,54,21,12];
console.log(arr);
let str="Rahul";
let heroes=["salman Khan","Shahrukh khan","ranbir kapoor","bobby deol"];
for(let i=0;i<4;i++)
{
  console.log(heroes[i]);
}
for(let hero of heroes)
{
  console.log(hero);
}
let marks=[21,32,54,32,65];
let sum=0;
for(let i of marks)
{
  sum+=i;
}
let avg=sum/marks.length;
console.log(`The average of the marks is ${avg}`);
let price=[250,645,300,900,50]
let val=0;
for(let j of price)
{
  let final=j-j*10/100;
  console.log(`After applying 10% Discount on price ${j} is ${final}`);
}
val++;

