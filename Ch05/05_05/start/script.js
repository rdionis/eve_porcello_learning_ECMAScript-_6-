// generators

function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
}

let countdown = director();

console.log(countdown.next().value); // returns Three
console.log(countdown.next()); // returns {value: 'Two', done: false}
console.log(countdown.next()); // returns {value: 'One', done: false}
console.log(countdown.next()); // returns {value: 'Action', done: false}
console.log(countdown.next()); // returns {value: undefined, done: true}
