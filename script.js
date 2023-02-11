function add7(plus) {
  number = plus + 7;
  console.log(number);
}

add7(3);

function multiply(x, y) {
  number = x + y;
  console.log(number);
}

multiply(10, 5);

function capitalize() {
  let string = "watch";
  let newString = string.toUpperCase()[0]; // retrun "watch" but only the first letter W to uppercase

  return newString;
}

console.log(capitalize());

function lastLetter() {
  let string = "Hello There";
  let newString = string[10];

  return newString;
}

console.log(lastLetter());
