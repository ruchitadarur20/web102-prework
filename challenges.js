// 1. Function
function greetUser(name) {
    return `Hello, ${name}!`;
}
console.log(greetUser("Ruchita"));

// 2. Array and for loop
const colors = ["red", "blue", "green"];
for (let color of colors) {
    console.log(color.toUpperCase());
}

// 3. Object and template literal
const user = {
    name: "Ruchita",
    age: 22,
    isStudent: true,
};
console.log(`${user.name} is ${user.age} years old.`);

// 4. Array filter and reduce
const numbers = [5, 10, 15, 20];
const filtered = numbers.filter(num => num > 10);
console.log("Filtered:", filtered);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// 5. Destructuring
const [firstColor, ...restColors] = colors;
console.log("First:", firstColor);
console.log("Others:", restColors);
