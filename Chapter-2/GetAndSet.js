// Getter function can return any property by get function

const personInfo = {
    name: 'Shakil Ahmed',
    prof: 'Programmer',
    age: 27,
    gender: 'male',
    cityTown: 'Sirajganj',
    get cityGet(){
        return this.cityTown;
    }
}

// console.log(personInfo.cityTown);
// console.log(personInfo.cityGet);



const setPersonalInfo = {
    name: 'Shakil Ahmed',
    prof: 'Programmer',
    age: 27,
    gender: 'male',
    cityTown: 'Sirajganj',
    set changeCity(newCity){
        this.cityTown = newCity;
    }
};

setPersonalInfo.newCity = 'Dhaka';

console.log(setPersonalInfo);
console.log(setPersonalInfo.newCity);