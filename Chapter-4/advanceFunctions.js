// let variable convert a function
let fun = function(a, b) {
    return a + b;
}

const funValue = fun(10, 20);
// console.log(funValue);


// arrow function
let arrowFun = (x, y) => x + y;
// console.log(arrowFun(50, 39)); 


function add(x, y) {
    return x + y;
}

// console.log(add.length);
// console.log(add.prototype);


const Person = {
    FullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = {
    firstName: "Shakil",
    lastName: "Ahmed"
}

const person2 = {
    firstName: "Khushi",
    lastName: "Khatun"
}

const ValueAdd = Person.FullName.call(person2);

// console.log(ValueAdd);


// apply method
const Person2 = {
    FullName: function(city, country){
        return `${this.firstName} ${this.lastName}, ${city} ${country}`;
    }
}

const person3 = {
    firstName: "Shakil",
    lastName: "Ahmed"
}

const applyMethod = Person2.FullName.apply(person3, ['Sirajganj', 'Bangladesh']);
// console.log(applyMethod);



// function binding
const data = {
    firstName: 'Shakil',
    lastName: 'Ahmed',
    display: function(){
        // return `${this.firstName} ${this.lastName}`;
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let display = data.display.bind(data);
// setTimeout(display, 3000);