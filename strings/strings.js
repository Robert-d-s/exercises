"use strict";

// const longline =
//   "A very, very, very, very, VERY! long line of text,\
//   that spans across the width of the editor!";
//------------------------------------------------------------
// const name = "Peter";
// const drink = "Pepsi";

// console.log(`Hello ${name}, would you like a ${drink}?`);

// console.log("Hello " + name + ", would you like a " + drink + "?");

// const text = `Hello ${name}, would you like a ${drink}?`;

// console.log(text);
//------------------------------------------------------------
// const hName = "Peter";
// const animal = "cat";
// const aName = "Mandu";

// const text = `My name is ${hName}.
// I have a ${animal} called ${aName}`;

// console.log(text);
//------------------------------------------------------------
// const name = "Peter";
// const len = name.length;

// console.log(`${name} is ${len} characters long`);

// const letter = name[0];

// console.log(`The first letter of ${name} is ${letter}`);
//------------------------------------------------------------
// const name = "Albus Percival Wulfric Brian Dumbledore";
// const len = name.length;
// console.log(`Total nr of charaters is ${len}`);
// console.log(`3rd character is ${name[2]}`);
// console.log(`7th character is ${name[6]}`);

// const firstDIndex = name.indexOf("D");
// console.log(`The index of the first D in Dumbledore is ${firstDIndex}`);
// const lastEIndex = name.lastIndexOf("e");
// console.log(`The index of the last e in Dumbledore is ${lastEIndex}`);
//------------------------------------------------------------

// const str1 = "   There is       space here \n   ";
// const str2 = str1.trim();
// console.log(str2);
// console.log(`_${str2}_`);
//------------------------------------------------------------

// const fullName = "Peter Heronimous Lind";
// const firstName = fullName.substring(0, 5);
// const lastName = fullName.substring(17);

// console.log(`first name is: _${firstName}_`);
// console.log(`last name is _${lastName}_`);
//------------------------------------------------------------

const name = "Albus Percival Wulfric Brian Dumbledore";
const word1 = "Albus";
const word2 = "Dumbledore";
const word3 = "Wulfric";
const word4 = " Wulfric ";
const word5 = "ian";
const word6 = "bus";
const startIndex = name.indexOf(word6);
const endIndex = startIndex + word6.length;
console.log(`The index range of ${word6} is from ${startIndex} to ${endIndex}`);

const firstName = name.substring(0, 5);
console.log(firstName);
const firstMiddleName = name.substring(29);
console.log(firstMiddleName);
const thirdMiddleName = name.substring(15, 22);
console.log(thirdMiddleName);
const thirdMiddleName2 = name.substring(14, 23);
console.log(`_${thirdMiddleName2}_`);
const ian = name.substring(25, 28);
console.log(ian);
const bus = name.substring(2, 5);
console.log(bus);
