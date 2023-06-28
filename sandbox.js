//alert("hi") ;  
//strings
console.log("this is a string");

//concatenation

console.log("this is a string"+" so am I.");
let firstNAME="Clement";
let secondName=" Byrnes";
fullName= firstNAME+ secondName;
console.log(fullName);

//string methods
myString="Clement";
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());


console.log(myString[2]);
//string lenght

myString="Clement";
console.log(myString.length+"   "+ "char long");
//commom string methods
let email="bobmouse@gmail.com";
let results= email.slice(2,7);

let result=email.lastIndexOf('i');

let result2=email.substr(2,4);
let result3=email.replace('i','z');
console.log(results);
console.log(result);
console.log(result2);
console.log(result3);
//string templates

let name="John";
let  age=56;
let result4= `Hi my name is ${name} and I am ${age} years old`//use back ticks
console.log(result4);


