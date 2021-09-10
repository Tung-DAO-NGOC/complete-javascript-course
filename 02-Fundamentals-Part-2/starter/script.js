"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//   console.log(`I can drive`);
// }

// const interface = "Audio";
// const private = 123;

function logger() {
  console.log(`My name is Jonas`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(5, 0));
