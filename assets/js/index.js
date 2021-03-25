// const userInput = prompt();

// console.log(userInput);

// const myFirstFunc= function(){
//   console.log("1");
// }

// myFirstFunc();
// myFirstFunc();
// myFirstFunc();

// task1

/**
 * Checks what number is max
 * @param {number} val1
 * @param{number} val2
 * @returns{number}
 */

const userInput1 = prompt("Enter number 1: ");
const userInput2 = prompt("Enter number 1: ");

/**
 * Checks what number is max
 * @param {number} val1 
 * @param {number} val2 
 * @returns {number}
 */
const maxNumber = function(val1, val2) {
  if (userInput1 > userInput2) {
    return userInput1;
  }
  return userInput2;
}
console.log(maxNumber(userInput1,userInput2));

// task2

const minNumber = function(val1, val2) {
  if (userInput1 < userInput2) {
    return userInput1;
  }
  return userInput2;
}
console.log(minNumber(userInput1,userInput2));

// task3


const isEven = function(num) {
  if ((num % 2)>0) {
    return "Нечётное";
  }
  return "Чётное";
}
console.log(isEven(userInput1));
