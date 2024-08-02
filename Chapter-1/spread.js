// constructing array literal

let ValueOne = [1,3,4,5,6];
let ValueTwo = [...ValueOne,7,8,8,54,64];
// console.log(ValueTwo);


// concatenating arrays
let Teacher = ['ahed','tutul','sajeeb'];
let SupportTeam = ['salman', 'rakibul', 'nasif'];
// let hablu_programmer = [...Teacher, ...SupportTeam]; // spread operator
let hablu_programmer = [...Teacher.concat(...SupportTeam)];
// console.log(hablu_programmer);


//  copying an array
let score = [90,69,49,64];
let worldCup = [...score];
console.log(worldCup[1]);