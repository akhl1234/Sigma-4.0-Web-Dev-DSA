// Return elements larger than a number

function elementsLargerThan(arr, num) {
  return arr.filter((item) => item > num);
}

let array = [10, 25, 5, 8, 30];
let number = 10;
console.log(elementsLargerThan(array, number));
