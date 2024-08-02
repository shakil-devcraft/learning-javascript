const data = require("./Innocent.json");

// console.log(data.UserInfo); // access
// console.log(data.UserInfo[2].students);

// const updateUser = data.UserInfo[2].students = 10000; // update students
// console.log(updateUser);

data.UserInfo = [1, 2, 3, 4, 5, 6]; // object ot array types
// console.log(data.UserInfo[3]);

delete data.UserInfo;
console.log(data);