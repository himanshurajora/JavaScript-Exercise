const getAllFirstNames = require('./modules/getAllFirstNames')
const makeLastNameUpperCase = require('./modules/makeLastNameUpperCase')
const ageFactor = require("./modules/ageFactor")
const getAverageAge = require("./modules/getAverageAge")
const getMemberWithMaximumAge = require("./modules/getMaxAge")
const ageGroups = require("./modules/ageGroups")
const addNew = require("./modules/addNew")
const getFirstTwo = require('./modules/getFirstTwo')
const addNewOnce = require('./modules/addNewOnce')
const members = [
    { name: 'Vijay Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];

// Vanilla JavaScript

// console.log("1. Get All First Names")
// console.log(getAllFirstNames(members))

// console.log("2. Make Last Name Upper Case")
// console.log(makeLastNameUpperCase(members))

// console.log("3. Get All Members Where Age is Between 41 and 60")
// console.log(ageFactor(members))

// console.log("4. Get Average Age")
// console.log(getAverageAge(members))

// console.log("5. Get Member With Maximum Age")
// console.log(getMemberWithMaximumAge(members))

// console.log("6. Devide them into three age groups")
// console.log(ageGroups(members))

// console.log("7. Add a new member to existing members aray at index 2")
// console.log(addNew(members))

// console.log("8. Get fist two object from the given members")
// console.log(getFirstTwo(members))

console.log("9. Add new at index 0")
addNewOnce(members)
console.log(members)
