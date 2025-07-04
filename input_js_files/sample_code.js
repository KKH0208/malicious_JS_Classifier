// This is a sample JavaScript file for AST parsing
const greeting = "Hello, world!";
let number = 10;
if (number > 5) {
    console.log(greeting);
    function sayGoodbye() {
        console.log("Goodbye!");
    }
    sayGoodbye();
}

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// A more complex example with regex and template literals
const regex = /[a-z0-9]+/gi;
const template = `The number is ${number} and the greeting is ${greeting}.`;

function complexFunction(a, b) {
    return a + b * 2;
}