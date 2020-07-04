// Loops - Repeat code

var todos = ["clean room", "brush teeth", "wash car", "eat"];

// for loop
for (var i = 0; i < todos.length; i++) {
  todos[i] += "!";
}

// while loop
var counterOne = 0;

while (counterOne > 0) {
  console.log(counterOne);
  counterOne++;
}

// For each
todos.forEach(function (todo, i) {
  console.log(todo, i);
});
