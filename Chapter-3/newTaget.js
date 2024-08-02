function Person(name){
    if(!new.target){
        throw 'Must use new operator with this Person function';
    }
    this.name = name;
}

let myPerson = new Person('Shakil');
console.log(myPerson);