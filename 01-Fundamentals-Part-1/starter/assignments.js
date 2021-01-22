// let country = "Kenya";
// let continent = "Africa";
// let population = 42000000;

// console.log(country);
// console.log(continent);
// console.log(population);

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const JohnBMI = massJohn / heightJohn ** 2;

let higherBMI;

if(markBMI > JohnBMI){
    higherBMI = `Mark's BMI(${markBMI}) is higher than John's(${JohnBMI})!`
} else {
    higherBMI = `John's BMI(${JohnBMI}) is higher than Mark's(${markBMI})!`
}
console.log(higherBMI);
