let name = "Marwa";
let age = 28;
let isStudent= false;

var x = 20;
var y = 5;
document.write(
    "x= " + x + "<br>" + "y= " + y + "<br>"
)
document.write("Sum: x+y= " + (x+y) + "<br>");
document.write("Difference: x-y= " + (x-y) + "<br>");
document.write("Product: x*y= " + (x*y) + "<br>");
document.write("Quotient: x/y= " + (x/y) + "<br>");
document.write("Remainder: x%= " + (x%y) + "<br>");

let fruits = ["apple", "orange", "banana", "mango"];
document.write("First fruit: " + fruits[0] + "<br>");
fruits.push("pineapple");
fruits.shift();
document.write("Removed first fruit:" + fruits + "<br>");

const student = {
    name: "Ahmed",
    grade: "B",
    subjects: ["Math", "Physics", "Chemistry"],
};
document.write("Student name: " + student.name +"<br>");
document.write("Student grade: " + student.grade +"<br>");

// Create an Array from the Properties
const myArray = Object.values(student);
// Stringify the Array
let text = myArray.toString();
document.write("Student object: " + text + "<br>");

Object.defineProperty(student, "isGraduated", {value: false});
document.write("Student graduatation status: " + student.isGraduated +"<br>");