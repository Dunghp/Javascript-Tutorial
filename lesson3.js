/*
    arithmetic expresion is a combination of...
    operators (+, -, *, /, %)
    that can be evaluated to a value
    ex: y = x + 5;
*/
let students = 20;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// let extraStudents = students % 2;

students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

console.log(students);
// console.log(extraStudents);

/*
    operation precedence
    1.parentthesis ()
    2.exponents
    3.multiplication & division
    4.addition & subtraction
*/
let result = 1 + 2 * (3 +4);
console.log(result);