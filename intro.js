console.log(2 / 8);
console.log(59 + 30);

//single line comment
/**
 * Multiple line comment
 *
 *
 */

console.log(20 + (22 - 5));
console.log("Hello World");

("Vincent Kimani");
// name is an example of a varriable
// We should use the camelcase naming cinvention ==firstName
name = "Vincent Kimani";
console.log(name);
//  age = "19";
// console.log(age);
num = 3 + 6;
console.log(num);
fullName = "Vincent Macharia Kimani";
console.log(fullName);
/* Rules When Creating varriables in Js
1.We should use camelCase naming convention
2.Js is case sensitive
3.Don't start varriables with numbers, always start with lower case letter
4.Do not use reserved words
5.As a rule of thumb always use const or let to create varriables, there is also
   the var keyword but we do not use it
*/
let age;
age = 89;
// let is used to reassign varriables
console.log(age);
age = 30;
console.log(age);

const firstName = "Lionel";
console.log(typeof firstName);
const lastName = "Messi";
console.log(typeof lastName);
console.log(firstName + " " + lastName);
const studentFirstName = "Vincent";
const studentMiddleName = "Macharia";
const studentLastName = "Kimani";
console.log(studentFirstName + " " + studentMiddleName + " " + studentLastName);

console.log(`Kimani ${studentMiddleName} age is ${2025 - 2005}`);
console.log(`${firstName} ${lastName}`);
console.log(typeof fullName);

Number = 5000 - 8000;
console.log(Number);
console.log(typeof Number);
const money = "$" + 60000;
console.log(money);
console.log(typeof money);

console.log(typeof 800);
console.log(typeof -9090);
console.log(typeof Math.sqrt(-4));
console.log(Math.sqrt(25));
console.log(typeof Math.sqrt);
console.log(typeof Math.sqrt(25));

console.log(typeof true);
console.log(typeof false);

const student = {
  name: "Joseph",
  class: "Web9",
  studentEmail: "joseph@student.moringaschool.com",
  age: "20",
  regNumber: "SCT222-0131/ 2024",
  isDisciplined: true,
};
console.log(student);

const supraMk4 = {
  carName: "Supra MK4",
  engine: "2JZ-series",
  accelration: "100 km/h in 4.9 sec",
  topSpeed: " 277km/h",
  horsePower: "220 HP",
};
console.log(supraMk4);

const cars = ["gtr", "skyLine", "supra"];
const value = ["$" + 5000, "$" + 6000, "$" + 80000];
console.log(cars + " " + value);
console.log(typeof cars + " " + value);

// Statements
// collection of data with key value pairs
const car = {
  engine: "V8",
  color: "Black",
  brand: "Toyota",
  seatCapacity: "2",
  owner: {
    firstName: "David",
    phone: "0701804607",
    ["full name"]: "David Kiptum",
  },
  previousOwners: ["Tony"],
};

console.log(car.seatCapacity);
console.log(car.owner["full name"]);
console.log(car.brand);
console.log(car["owner"]["phone"]);

const student2 = {
  name: "Kimani Macharia",
  age: "19",
  gender: "Male",
  class: {
    cohort: "SDF-FT13",
    name: "Web9",
    tm: {
      name: "Nelson",
      yearsOfexperience: "2",
    },
    numberOfstudents: "41",
    classModule: "SD",
  },
};
console.log(student2.class.tm.name);
console.log(student2["class"]["tm"]["yearsOfexperience"]);
console.log(student2);
console.log(`${student2.class.classModule},${student2.class.tm.name}`);
// to check for a propery in an object:

console.log("A quick brown fox".includes("fox"));
// to update properties
student2.regNumber = "sct333";
console.log(student2.regNumber);
// delete properties
delete student2.regNumber;
console.log(student2);

// Object methods
// 1.Object.keys()-> returns an array of object keys
console.log(Object.keys(student2));

// 2. Object.values() -> returns an array of values
console.log(Object.values(student2));

const key = "engine";
console.log(car[key]);
// smae thing as with 154 and 153
console.log(car[`engine`]);

// Functions allow reuserability
// D.R.Y Do not repeat yourself
// Can accept one or more parameters seperated by a comma
// Parameter -> varriables listed in the parenthis of a function
// Arguments -> Values that are passed when colling a function
// In order for declared functions to run we need to call/invoke them

// syntax
function functionName() {
  // function body
}

console.log("Good morning Vincent");
// Fuction Declaration
function greeting(name) {
  console.log(`Good morning ${name}`);
}
// call/ execute the function
greeting("kimani");
greeting("Anna");
greeting("Joseph");

function sum(x, y) {
  console.log(x + y);
}
sum(6, 5);
sum(2, 2);

function greetings(firstName, lastName) {
  return `good morning ${firstName} ${lastName}`;
}
console.log(greetings("Macharia", "Kimani"));
