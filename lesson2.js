/*
a variable is a container for storing data
a variable behaves as if it was the value that it contains

tow steps:
    1.Declaration (var, let, const)
    2.Assignment (=assignment operation)
*/

// let age;
// age = 21;
let age = 21;
let firstName = "Mr Smith";
let student = true;

// age = age + 1;

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;