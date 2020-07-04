// Array - Zero index
var list = ["tiger", "cat", "beer", "bird"];

// tiger
console.log(list[0]);

// Array in Array
var listOfThings = [["Car", "Keys", "Shoes"]];

// Keys
console.log(listOfThings[0][1]);

// Methods
list.shift(); // Remove first element
list.pop(); // Remove last element
list.push("elephant"); // Add element at end
var newList = list.concat(["bee", "bear"]); // Create a new array
list.sort(); // Sort original list
