/*
//function draw box
function box(){
    console.log("+=========+");
    console.log("+         +");
    console.log("+         +");
    console.log("+         +");
    console.log("+=========+");
}

box();
//info in to a function
let age = Number(prompt("Enter you age and I will tell you the year yu  were born"));

let currentYear=new Date().getFullYear();
console.log("You ere born in", currentYear-age);
*/
//arrow functions

const calcArea=(radius)=>3.142*radius**2;


const area=calcArea(10);
console.log('area is : ', area)
