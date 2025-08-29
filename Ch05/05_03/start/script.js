// =>

// let studentList = function (students) {
//   console.log(students);
// };

let studentList = students => console.log(students);

studentList(["A", "B", "C"]);

let list = ["apple", "banana", "cherry"];

// list.map(function (item) {
//   console.log(item);
// });

list.map(item => console.log(item));
