let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log('True');
for (const user of users) {

    if (user.status === true) {
        console.log(user);
    }
}
console.log('false');
for (const user of users) {
    if (user.status === false) {
        console.log(user);
    }
}
console.log('Age > 30');
for (const user of users) {
    if (user.age > 30) {
        console.log(user)
    }
}