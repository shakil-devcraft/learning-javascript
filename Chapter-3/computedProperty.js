// computed property means reverse proverty value is property name directly convert

let PropName = 'userName';

const UserInfo = {
    [PropName]: 'Shakil',
    email: 'the.better5fs@gmail.com',
    hobby: 'coding',
    age: 20
};

console.log(UserInfo);
console.log(UserInfo.userName);