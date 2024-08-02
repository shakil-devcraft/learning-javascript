/*
class object create rules, write (class) keyword then give a name of object example (PersonInfo),
PersonInfo object in write constructor keyword same function of constructor(can received param){},
Write a variable ex: sentPersonInfo and add new keyword storing  PersonInfo() data and call object
*/

class PersonInfo {
    constructor(name, prof, age, gender){
        this.name = name,
        this.prof = prof,
        this.age = age,
        this.gender = gender
    }
};

const sentPersonInfo = new PersonInfo('Shakil Ahmed', 'Freelancer', 27, 'male');

console.log(sentPersonInfo);