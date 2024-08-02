let data = fetch("https://jsonplaceholder.typicode.com/users");

// 1. first data access system
// data.then((res) => {
//     return res.json();
// }).then((read) => {
//     console.log(read[0]?.name);
// });


// 2. second data access system
async function Data() {
    // I can use direct json link
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const names = await response.json();

    console.log(names[0]);
    // console.log(names[0].address);
    // console.log(names[0].address.city);
    console.log(names[0].address.street);
}

Data();