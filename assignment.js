// Question 1: Temperature Converter
function convertTemperature(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return `${celsius}°C = ${fahrenheit}°F`;
}

// Test
console.log(convertTemperature(0));
console.log(convertTemperature(25));
console.log(convertTemperature(100));


// Question 2: Age Category
function getAgeCategory(age) {
  if (age < 13) return "Child";
  else if (age <= 19) return "Teenager";
  else if (age <= 59) return "Adult";
  else return "Senior";
}

// Test
console.log(getAgeCategory(10));
console.log(getAgeCategory(16));
console.log(getAgeCategory(35));
console.log(getAgeCategory(65));


// Question 3: Calculator
function calculator(num1, num2, operator) {
  switch(operator) {
    case "add": return num1 + num2;
    case "subtract": return num1 - num2;
    case "multiply": return num1 * num2;
    case "divide": return num1 / num2;
    default: return "Invalid operator";
  }
}

// Test
console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 5, "divide"));


// Question 4: Discount Calculator
function applyDiscount(price, discountPercent) {
  const discount = (price * discountPercent) / 100;
  const finalPrice = price - discount;
  return `Original: ₹${price}, Discount: ₹${discount}, Final: ₹${finalPrice}`;
}

// Test
console.log(applyDiscount(1000, 10));
console.log(applyDiscount(500, 20));


// Question 5: Grade Checker
function checkGrade(marks) {
  let grade = "";

  if (marks >= 90) grade = "A";
  else if (marks >= 80) grade = "B";
  else if (marks >= 70) grade = "C";
  else if (marks >= 60) grade = "D";
  else grade = "F";

  const status = marks >= 60 ? "Pass" : "Fail";
  return `Grade: ${grade}, Status: ${status}`;
}

// Test
console.log(checkGrade(95));
console.log(checkGrade(72));
console.log(checkGrade(45));


// Question 6: Product Info
function createProduct(name, price, inStock) {
  return {
    name: name,
    price: price,
    inStock: inStock,
    displayPrice: `₹${price}`,
    status: inStock ? "Available" : "Out of Stock"
  };
}

// Test
console.log(createProduct("Laptop", 50000, true));
console.log(createProduct("Mouse", 500, false));


// Question 7: Array Operations
function arrayInfo(arr) {
  return {
    length: arr.length,
    first: arr[0],
    last: arr[arr.length - 1],
    isEmpty: arr.length === 0
  };
}

// Test
console.log(arrayInfo([10, 20, 30, 40]));
console.log(arrayInfo([5]));
console.log(arrayInfo([]));


// Question 8: User Profile
function createUserProfile(firstName, lastName, age, city) {
  const fullName = `${firstName} ${lastName}`;
  return {
    fullName,
    age,
    city,
    isAdult: age >= 18,
    profileSummary: `${fullName}, ${age} years old, from ${city}`
  };
}

// Test
console.log(createUserProfile("John", "Doe", 25, "Mumbai"));
console.log(createUserProfile("Sara", "Khan", 16, "Delhi"));


// Question 9: Output Part 1
const x = 10;
const y = 20;
const result1 = x + y;
const result2 = `${x} + ${y}`;
const result3 = `${x} + ${y} = ${x + y}`;

console.log(result1);   // 30
console.log(result2);   // "10 + 20"
console.log(result3);   // "10 + 20 = 30"
console.log(typeof result1); // number
console.log(typeof result2); // string


// Question 10: Output Part 2
const user = { name: "Alice", age: 20 };
const age = 25;

console.log(user.name); // Alice
console.log(user.age);  // 20
console.log(age);       // 25

user.age = 21;
console.log(user.age);  // 21

const isAdult = user.age >= 18 ? "Yes" : "No";
console.log(isAdult);   // Yes


// Question 11: Email Validator
function validateEmail(email) {
  if (email === "") return false;
  if (!email.includes("@")) return false;
  if (!email.includes(".")) return false;
  return true;
}

// Test
console.log(validateEmail("john@example.com"));
console.log(validateEmail("invalid.email"));
console.log(validateEmail("test@domain"));
console.log(validateEmail(""));


// Question 12: String Formatter
function formatName(firstName, lastName) {
  return `${firstName.trim().toUpperCase()} ${lastName.trim().toUpperCase()}`;
}

// Test
console.log(formatName("john", "doe"));
console.log(formatName(" sarah ", " khan "));
console.log(formatName("mike", "smith"));


// Question 13: Shopping Cart Manager
function manageCart(cart, action, item) {
  switch(action) {
    case "add": cart.push(item); break;
    case "remove": cart.pop(); break;
    case "addFirst": cart.unshift(item); break;
    case "removeFirst": cart.shift(); break;
  }
  return cart;
}

// Test
let cart = ["Laptop", "Mouse"];
console.log(manageCart(cart, "add", "Keyboard"));
console.log(manageCart(cart, "remove"));
console.log(manageCart(cart, "addFirst", "Monitor"));
console.log(manageCart(cart, "removeFirst"));


// Question 14: Word Counter
function countWords(sentence) {
  return sentence.split(" ").length;
}

// Test
console.log(countWords("Hello world"));
console.log(countWords("JavaScript is awesome"));
console.log(countWords("I love coding in JavaScript"));


// Question 15: Array Manipulator
function arrayOperations(arr1, arr2) {
  const combined = arr1.concat(arr2);
  return {
    combined: combined,
    combinedString: combined.join(", "),
    hasApple: combined.includes("Apple"),
    length: combined.length
  };
}

// Test
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Orange", "Mango"];
console.log(arrayOperations(fruits1, fruits2));


// Bonus: Even or Odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Test
console.log(evenOrOdd(10));
console.log(evenOrOdd(7));
console.log(evenOrOdd(0));
