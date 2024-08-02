// objectliteral
// step-1
// function SayHi(username, userInfo){
//     return{
//         username: username,
//         userInfo: userInfo
//     }
// }

// step-2
function SayHi(username, userInfo){
    return{
        username,
        userInfo
    }
}

// console.log(SayHi("skrokeya470", "welcome your website"));


// step-3
let Message = "Hi, Junior Programmers",
    userName = "skrokeya470"

// const MyInfo = {
//     Message: Message,
//     userName: userName
// }

const MyInfo = {
    Message,
    userName
}

// console.log(MyInfo);


// step-4
// let name = "shakil";
// let Info = {
//     [name]: "He is Founder and CEO at hublu programmer",
// }

// console.log(Info);


// step-5
// let server = {
//     name: "server side",
//     restart(something){
//         console.log("This is Consise Method, " + something);
//     }
// }

let server = {
    name: "server side",
    'restart'(something){
        // console.log("This is Consise Method, " + something);
    }
}

// console.log(server['restart']("and it's working perfectly"));



// Question - 1 to Answer
function scopeTest() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";

        // let and const is block-scoped meaning It's is not access outside of (if) condition area
        console.log(letVariable);
        console.log(constVariable);
    }
    // var keywords is function scoped so It's can access anywhere
    console.log(varVariable);
}

scopeTest();




// Question - 2 to Answer 
function greet(name, greeting = 'Hello') {
    return `${greeting}, ${name}!`;
} 

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"



// Question - 3 to Answer
function sum(...amounts) {
    return amounts.reduce((total, count) => total + count, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5



// Question - 4 to Answer
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
let mergedArray = [...array1, ...array2, ...array3];

// Your code here
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]




// Question - 5 to Answer
const name = "John";
const age = 30;

let person = {
   name,
   age,
   greet(){
    return `Hi, I'm ${person.name} and I'm ${person.age} years old.`;
   }
}

// Your code here
console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."




// Question - 6 to Answer
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits){
    console.log(fruit);
}





// Question - 7 to Answer
// name and age already use another codes so this veriables name customize
const Name = "Alice";
const Age = 25;

// Your code here
const message = `My name is ${Name} and I am ${Age} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."





// Question - 8 to Answer
const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
];
  
// Your code here
for (const student of students) {
    console.log(`Student name is ${student.name} and grade: ${student.grade}`);
}





// Question - 9 to Answer
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Your code here
for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const number of innerArray) {
        sum += number;
    }
    console.log(sum);
}






// Question - 10 to Answer
const a = 5;
const b = 10;

// Your code here
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."