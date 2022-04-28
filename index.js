const getAllFirstNames = require('./modules/getAllFirstNames')
const makeLastNameUpperCase = require('./modules/makeLastNameUpperCase')
const members = [
    { name: 'Vijay Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];



// console.log(getAllFirstNames(members))
console.log(makeLastNameUpperCase(members))
