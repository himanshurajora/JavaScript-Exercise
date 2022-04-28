const getAllFirstNames = require('./modules/getAllFirstNames')
const makeLastNameUpperCase = require('./modules/makeLastNameUpperCase')
const ageFactor = require("./modules/ageFactor")
const members = [
    { name: 'Vijay Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];



// console.log("1. Get All First Names")
// console.log(getAllFirstNames(members))
// console.log("2. Make Last Name Upper Case")
// console.log(makeLastNameUpperCase(members))
console.log("3. Get All Members Where Age is Between 41 and 60")
console.log(ageFactor(members))