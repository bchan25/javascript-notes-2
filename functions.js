// Functions - Perform a single Action
// function(arguments)

// Calling a function
console.log("Hello World");
alert("Hi world");

// Declare a function declaration
function sayHello() {
  console.log("Hello");
}

sayHello();

// function expression (anonymous function)
var sayBye = function () {
  console.log("Bye");
};

sayBye();

// Arguments
function sing(song) {
  console.log("Singing: " + song);
}

sing("Laa dee daa");

function multiply(a, b) {
  return a * b;
}

multiply(12, 34);
