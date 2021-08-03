// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Problem
/* We work for a company building a smart home thermometer. Our most recent task is this: "Given
an aray of temperatures of the day, calculate the temperature amplitude. Keep in mind that sometimes
ther might be a sensor error"*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? is the difference between the max and min temperature
// - how do we get the max and min temperatures?
// - how does the error look like? what do we do?

// 2) Breaking the problem to sub-problems
// - How to ignore errors?
// - How to find the max ?
// - How to find the min ?
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);

//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Problem 2;
// Function should now receive two arrays
// 1) Understanding the problem
// - With two arrays should we write the commands twice? No just merge the two arrays

// 2) breaking the problem into sub-problems
// - Merge two arrays?

// FIXING BUGS
// Using the smart thermometer example, create a function that converts the celcius measurements
// to Kelvins

// const measurementsInKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Degrees Celcius')),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measurementsInKelvin());

// const calcTempAmplitude = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);

//   return max - min;
// };

// const amplitude = calcTempAmplitude([9, 1, 3], [5, 6, 1]);
// console.log(amplitude);

/* Given an array of forecasted maximum and minimum temperatures, the thermometer
displays a string with these temperatures.*/

// function printForecast(arr) {
//   let forecastString = [];
//   for (let i = 0; i < arr.length; i++) {
//     const createString = function () {
//       return `${arr[i]}°c in ${i + 1} days ... `;
//     };
//     forecastString.push(createString());
//   }
//   return `... ${forecastString.join('')}`;
// }
// console.log(printForecast([17, 21, 23]));
// console.log(printForecast([12, 5, -5, 0, 4]));
