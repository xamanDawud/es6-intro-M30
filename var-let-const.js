// 1. shouldn't used var when you go to the intermediate level
// 2. Most of the case lat will be used. Eventually when you need to reassign or update variable that time will use lat
// 3. Const will used when you are sure that variable no need to change future. If you try to reassign variable that will give you an error

let number = 23;
number = 50;
// console.log(number);

const newNumber = 234;
// newNumber = 55;
// console.log(newNumber);  it gives the error

// You can't change an array full of content when you used const but you can change element
const arr = [23, 53, 645];
// arr = [55, 55, 324];
// console.log(arr); give an error
arr[2] = 44;
console.log(arr);

// You can't change an object full of content when you used const but you can change element

const student = {
  name: "xaman",
  age: 23,
};
// student = {
//   name: "aslam",
//   age: 55,
// }; that gives an error

student.name = "aslam";

console.log(student);
