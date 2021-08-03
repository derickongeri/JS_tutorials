// Activate strict mode to avoid introducing bugs and show visible errors in developer console
'use strict';

// function logger() {
//     console.log('my name is derick')
// }

// // calling running or invoking the function
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} aples and ${oranges} oranges`
//     return juice
// }

// fruitProcessor(5, 0);

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

/* Function declarations and Expressions */

// // Function declaration
// function calculateAge(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calculateAge(1992);
// console.log(age1)

// // Function expression
// const calcage2 = function (birthYear){
//     return 2037 - birthYear;
// }

// const age2 = calcage2(1992)

// console.log(age2)

// ======================================================= Arrow function ===================

// const ageCalculator = birthYear => 2037 - birthYear

// const age = ageCalculator(1992);
// console.log(age)

// const yearsTillRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirementYearsleft = 65 - age;
//     return `${firstName} reties in ${retirementYearsleft}`;
// }

// console.log(yearsTillRetirement(1992, 'Derick'));

// function cutFruitPieces(fruit){
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`

//     return juice
// }

// console.log(fruitProcessor(2,  5))

// const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore)/3;

// const dolphinsAvg = calcAverage(44, 23, 71);
// const koalasAvg = calcAverage(85, 54, 41);

// function checkWinner (avgDolphins, avgKoalas){

//     if (avgDolphins >= 2*avgKoalas){
//         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//     } else if (avgKoalas >= 2*avgDolphins){
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//     } else {
//         return 'no team wins'
//     }
// }

// console.log(checkWinner(dolphinsAvg, koalasAvg));

// const friends = ['Micheal', 'Steve', 'Peter'];

// //add elements to the array
// friends.push('Derick')

// console.log(friends)

// friends.unshift('John')
// console.log(friends);

// //remove elements from the array
// friends.pop()//remove the last element
// console.log(friends)

// const poppedElement = friends.pop();//return popped element
// console.log(poppedElement)

// friends.shift()//remove first element
// console.log(friends)

// //get the position of an element
// console.log(friends.indexOf('Steve'))

// //get true or false if element exists in array
// console.log(friends.includes('Bob'))

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[bills.length - 1] + tips[tips.length -1]]

// console.log(bills)
// console.log(tips)
// console.log(total)

// const Derick = {
//     firstName: 'Derick',
//     lastName: 'Ongeri',
//     age: 2021 - 1996,
//     job: 'developer',
//     friends: ['Japhet', 'Doreen', 'Grace']
// }

// console.log(Derick.lastName);
// console.log(Derick['lastName']);

// const nameKey = 'Name';
// console.log(Derick['first' + nameKey])

// // const interestedIn = prompt('What do you want to know about Derick?'+ 
// // 'Choose one(firstName, lastName, job, age, friends)')

// // if (Derick[interestedIn]){
// //     console.log(Derick[interestedIn])
// // } else {
// //     console.log('Wrong request! Choose between firstName, lastName, age, job and Friends')
// // }

// Derick.location = 'Kenya';
// Derick['twitter'] = '@derickongeri'

// console.log(Derick)

// console.log(`${Derick.firstName} has ${Derick.friends.length} friends, and his best friend is ${Derick.friends[0]}`)

// const mark = {
//     firstNmae: 'Mark',
//     lastNmae: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass/(this.height*this.height)
//         return this.bmi
//     }
// }

// const john = {
//     firstNmae: 'John',
//     lastNmae: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass/(this.height*this.height)
//         return this.bmi
//     }
// }

// console.log(john.calcBMI(), mark.calcBMI())

// if (mark.bmi > john.bmi){
//     console.log(`${mark.firstNmae} ${mark.lastNmae}'s BMI (${mark.bmi}) is higher than ${john.firstNmae} ${john.lastNmae}'s (${john.bmi})`)
// }else{
//     console.log(`${john.firstNmae} ${john.lastNmae}'s BMI (${john.bmi}) is higher than ${mark.firstNmae} ${mark.lastNmae}'s (${mark.bmi})`)
// }

// const mark = [
//     'Derick',
//     'Ongeri',
//     2021-1996,
//     'Developer',
//     ['Japhet', 'Doreen', 'Grace']
// ];

// const types = [];

// for(let i=0; i < mark.length; i++){
//     //reading from mark
//     console.log(mark[i], typeof mark[i]);

//     //filling types array
//     //types [i] = typeof mark[i];
//     types.push(typeof mark[i])
    
// }

// console.log(types)

// const years = [1996,1998,1999,2005];

// const ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2020 - years[i])
// }

// console.log(ages)

// loop in loop and looping backwards

// const mark = [
//     'Derick',
//     'Ongeri',
//     2021-1996,
//     'Developer',
//     ['Japhet', 'Doreen', 'Grace']
// ];

// for (let i = mark.length - 1; i >= 0; i--){
//     console.log( i ,mark[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++){
//     console.log(`-----------starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise} rep ${rep}`);
//     }
// }

// for( let rep = 1; rep < 11; rep++){
//     console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep < 11) {
//     console.log(`WHILE: Lifting weights rep ${rep} 🏋️‍♂️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice)

// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6){
//         console.log(`You rolled a six`)
//     }
// }

const calcTip = function (bill){
    const tip = bill >=  50 && bill <= 300 ? bill * 0.15: bill * 0.2;
    return tip
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 55];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
         sum += arr[i]
    } 
    return sum / arr.length
}
console.log(calcAverage([4, 5, 6]));