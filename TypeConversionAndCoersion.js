let num = 6;
let str = "14";

// Type Coercion
let result1 = num + str; // JavaScript coerces the number 6 to the string "14" and concatenates
console.log(result1); // Output: "614"

// Type Conversion Number
let result2 = num + parseInt(str); // Converts the string "14" to the number 6 before adding
console.log(result2); // Output: 20

// Type Conversion String
let result3 = num.toString() + str;
console.log(result3);

let value = "0"; //0 is a non empty string not number

// Type Coercion
if (value) {
  console.log("Truthy"); // Output: "Truthy" (non-empty strings are truthy)
}

// Type Conversion
if (Boolean(value)) {
  console.log("Truthy"); // Output: "Truthy" (explicitly converts to boolean)
}
