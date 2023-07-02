//FOR LOOPS
/*
for(let i=0;i<=5;i++){
    console.log(i)
}

//transversing an array
const names=['Pat', 'cillian','ciaran']

for(let i=0;i<names.length;i++){
    console.log(names[i])
}
*/
//while loops
let counter=0;//initilises counter to 0
while(counter<5){
    console.log('Hi '+counter);
    counter++;//increments counter
}
const names=['Pat', 'cillian','ciaran']
let i=0;
while (i<names.length){
    console.log(names[i]);
    i++;
}

//Do while loop
let n=5;
//code will always be executes oncs as the loop sentinel is the the end
do{
    console.log("the val of n is "+n);
}
while (n<5);
//if loop
let password='pass12345678';
if(password.length<=8){
    console.log("Password is too short");
}
else{
    console.log('too long')

}
//age checker for driving licence 
let age=prompt("plese enter you age. ");
//condtional
if (age<17){
    console.log("Sorry too young");
}
else if (age>100){
    console.log("Sorry too old");
}
else{
    console.log("All ok");
}




