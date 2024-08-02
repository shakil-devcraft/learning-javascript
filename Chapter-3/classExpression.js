// class expression

let Person = class {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
};

let about = new Person('Shakil Ahmed', 'the.better5fs@gmail.com', 'Shakil244');
// console.log(about);


// First-class citizen

function Factory(innocetClass){
    return new innocetClass();
};

let greeting = Factory(class {
    sayHi(){
        console.log('Hello, Junior Programmers');
    }
});

greeting.sayHi();