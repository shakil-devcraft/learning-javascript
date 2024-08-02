function displayer(userData){
    console.log(userData);
}

function user(firstName, lastName, prof, age){
    firstName,
    lastName,
    prof,
    age

    let info = `${firstName} ${lastName}, ${prof}, ${age}`;
    return info;
}

let MyInfo = user('Shakil', 'Ahmed', 'Programmer', 27);
displayer(MyInfo);