var _ = require('lodash');
// all tasks with lodash
module.exports = function withLodash(members) {
    // first name array
    console.log("1: Get Array of Firstnames of Everyone")
    console.log(_.map(members, 'name'));

    // Object Iterator for lodash
    const lastNameUpperCase = (member) => {
        var name = member.name.split(' ');
        name[name.length - 1] = name[name.length - 1].toUpperCase();
        return {
            ...member,
            name: name.join(' ')
        }
    }
    console.log("2: Make everyone's last name uppercase")
    console.log(_.map(members, lastNameUpperCase))

    // belongs to iterator function to validate age
    const belongsToAge = (member) => {
        return member.age >= 41 && member.age <= 60 ? true : false;
    }
    // filter ages 41 - 60
    console.log("3: Get All Members Where Age is Between 41 and 60")
    console.log(_.filter(members, belongsToAge))


    // get average age 
    console.log("4: Get Average Age")
    console.log(_.meanBy(members, 'age'))

    // get person with max age
    console.log("5. get person with maximum age")
    console.log(_.maxBy(members, 'age'))

    // devide people in three groups, young, old, and noage
    console.log("6. Three Groups")
    const groups = _.groupBy(members, (member) => {
        if (member.age < 35){
            return 'young'
        }else if(member.age > 35){
            return 'old'
        }else{
            return 'noage'
        }
    })
    console.log(groups)

    // put a new member in the array at index 2
    // Not supported in lodash
    console.log("7. Add a new member to the array at index 2")
    const newMember = {
        name : "Himanshu Jangid",
        age: 35
    }

    members.splice(2, 0, newMember)

    // extract first and last value from the array, destructive method
    // does not have destructive methods
    console.log("8. Get First and second Value from the Array")
    console.log(_.slice(members, 0, 2))

    // insert a new member at the beginning of the array
    console.log("9. Add a new member to the beginning of the array")
    members.unshift({
        name: "Ankit Choudhary",
        age: 20
    })
    console.log(members)
}