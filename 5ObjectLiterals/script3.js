const guess=prompt("Enter the Max number");
const random=Math.floor(Math.random()*guess)+1
let num=prompt("Guess the random number");
while(true){
  if(num=="quit"){
    console.log("user quit");
    break;
  }
  if(num==random){
    console.log("congratulations your guess is right "+num);
    break;
  }
  else if(num<random){
    num=prompt("your guess is very small");
  }
  else{
    num=prompt("Your guess is very large");
  }
}
