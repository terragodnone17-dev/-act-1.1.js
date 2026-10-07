console.log("=======================3 VAriables================================");//varriables
let ha = 20;
let ha1 = 30;
let ha2 = 40;
let rangeconditionals = 5;
 let indexsaarrayko = 1;
let indexsaarrayko3= 0;
let indexsaarrayko2 = 2;
const name = "Marc";
const Lastn = "Cabili";
const YearL = "BSCS_3A";

//console.log("");

console.log("========================3 ARRAY===============================");
//array
console.log("Array");

let arrayko = [1,2,3,5];
let arrayko1 = [6,7,8,9];
let arrayko2 = [10,11,12,13];


console.log("==========================3 Conditionals=============================");

//part 1
if (ha > 0|| ha <0){
    console.log(arrayko);
}else{
    console.log("No value");
}
//part 2
if (ha1 > 0|| ha1<0){
    console.log(arrayko1);
}else{
    console.log("No value");
}
//part 3
if (ha2 > 0 || ha2<0){
    console.log(arrayko2);
}else{
    console.log("No value");
}



console.log("==========================3 Loop=============================");

console.log("====================For Loop====================");
console.log("part 1====");

for(let i = 0 ; i < rangeconditionals ; i++){
    console.log(ha);
    ha++;
}
console.log("part 2====");
for(let i = 0 ; i < rangeconditionals ; i++){
    console.log(ha1);
    ha1++;
}
console.log("part 3====");

for(let i = 0 ; i < rangeconditionals ; i++){
    console.log(ha2);
    ha2++;
}

console.log("====================While loop====================");
//while(!pass.equals("testingpassword"))

while(indexsaarrayko < arrayko.length){
    console.log("arrayko VAlue on index "+ indexsaarrayko);
    console.log(arrayko[indexsaarrayko]);
    

    console.log("prining USer Info");
    console.log("Name: " + name);
    console.log("Last NAme:" + Lastn);
    console.log("Year Level: " + YearL);
    return 0;
 }

 while(indexsaarrayko2 < arrayko2.length){
    console.log("arrayko2 VAlue on Index:" + indexsaarrayko);
    console.log(arrayko[indexsaarrayko]);
    

    console.log("prining USer Info");
    console.log("Name: " + name);
    console.log("Last NAme:" + Lastn);
    console.log("Year Level: " + YearL);
    return 0;
 }
 while(indexsaarrayko3 < arrayko1.length){
    console.log("arrayko1 VAlue on Index:" + indexsaarrayko);
    console.log(arrayk1[indexsaarrayko]);
    

    console.log("prining USer Info");
    console.log("Name: " + name);
    console.log("Last NAme:" + Lastn);
    console.log("Year Level: " + YearL);
    return 0;
 }



