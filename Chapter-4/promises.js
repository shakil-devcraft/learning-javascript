// let message = true;
let message = false;

let myPromise = new Promise((resolve, reject) => {
    if(message){
        resolve([
            {username: "Shakil", age: 27, prof: "Programmer", country: "BD"},
            {username: "Khushi", age: 25, prof: "Content Creator", country: "BD"}
        ]);
    }else{
        reject("You are not a Bangladeshi, So get out from here");
    }
});


myPromise.then((success) =>{
    console.log(success);
});
myPromise.catch((error) =>{
    console.log(error);
});

// console.log(myPromise);