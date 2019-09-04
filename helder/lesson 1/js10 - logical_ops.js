// LOGICAL OPERATORS

//    && (and)    || (or)


console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("--------");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var city = "HAM";
var age = 30;

if (city == "HAM" && age < 18) {
  console.log("Fritz");
}

if (city != "HAM" && age < 18) {
  console.log("Other cola");
}

if (city == "Berlin" || age >= 18) {
  console.log("Beer");
}