// function to select only the members where age is b/w 41 -60 Task - 3

module.exports = function ageFactor(members){   
    return members.filter(member => member.age >= 41 && member.age <= 60)
}