let foodItems=["tomato","potato","chilli","AlloParatha","paratha"];
foodItems.push("Sattu Paratha");
console.log(foodItems);
let deletedItems=foodItems.pop()
console.log(deletedItems);
console.log(foodItems);
console.log(foodItems.toString());  
let arr1=["Rahul","Sanjay","Gautam","Sneha","Sanya"]
let arr2=["Neha","gautam","prerna","shibu"]
let arr3=arr1.concat(arr2)
console.log(arr3);
let arr4=[1,2,3,4,5,6,7,8,9,10]
arr4.splice(4,0,111);
let x=arr4.splice(3,0,900);
console.log(x);
//Practice Question
let companies=["Microsoft","Google","facebook","Amazon","Reebok"];
companies.shift();
companies.splice(2,1,"Instagram");
companies.push("Apna College");
