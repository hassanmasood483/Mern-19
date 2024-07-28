// simple if
// var x = 4;
// if (x > 4) {
//   console.log("x is greater than 4");
// }
// multiple ifs
//  all conditions are checked
// var x = 4;
// if (x > 4) {
//   console.log("x is greater than 4");
// }
// if (x > 3) {
//   console.log("x is greater than 3");
// }
// if (x > 2) {
//   console.log("x is greater than 2");
// } else {
//   console.log("x is less than 4");
// }
// else if
// if found true then other conditions are ignored , else block is must here
// var x = 4;
// if (x > 4) {
//   console.log("x is greater than 4");
// } else if (x > 3) {
//   console.log("x is greater than 3");
// } else if (x > 2) {
//   console.log("x is greater than 2");
// } else {
//   console.log("x is less than 4");
// }
// Nested If
var x = 4;
if (x == 4) {
  if (x > 3) {
    console.log("x is greater than 3");
  } else {
    console.log("x is less than 4");
  }
} else {
  console.log("error");
}
// switch case
// let oper = "+";
// let a = 5;
// let b = 6;
// switch (oper) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
// }
// ternary
// in ternary operator you can't return a value and can't use block as well
let a = 6;
a > 6 ? console.log("a is greater than 6") : console.log("a is equal to 6");
