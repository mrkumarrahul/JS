// let smallImages=document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImages.length;i++){
//    smallImages[i].src="assets/spiderman_img.png"
//    console.log(`value of image no. ${i} is changed.`);
// }
let para=document.createElement("p");
para.innerText="Hey I am another paragraph created in VS Code";
document.querySelector('body').append(para);
para.classList.add("red");


let heading=document.createElement("h3");
heading.innerText="Hey I'm blue";
document.querySelector('body').append(heading);
heading.classList.add("blue");

let div=document.createElement("div");
let h1=document.createElement("h1");
let p=document.createElement("p");
h1.innerText="I am in a div";
p.innerText="Mee too!!";
div.appendChild(h1);
div.appendChild(p);
document.querySelector('body').append(div);
document.querySelector('body').append(div);
div.classList.add("box");
heading.classList.add("blue");

