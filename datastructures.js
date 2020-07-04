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

// Objects
var user = {
  name: "Ben",
  age: 32,
  hobby: "Football",
  hasCar: true,
  toDo: ["Walk dog", "Buy food", "Wash car"],
  shout: function () {
    console.log("SHOUTING!!!!");
  },
};

// Add
user.favouriteFood = "Curry";

// Change Value
user.hobby = "Racing";

// Call method
user.shout();

// Array of Objects
var userList = [
  {
    username: "ben",
    password: "1234",
  },
  {
    username: "sarah",
    password: "password",
  },
];

// Access sarah password
userList[1].password;
