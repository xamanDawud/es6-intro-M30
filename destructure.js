// array destructure
let arr = [23, 4, 2, 54, 23];
let [first, second, third, , fifth] = arr;
console.log(fifth);

// Object Destructure
let student = {
  name: "xaman Daud",
  phone: 01545525,
  address: "Sylhet",
};

let { name, phone, address } = student;
console.log(phone);

// delete object property
delete student.phone;
console.log(student);
