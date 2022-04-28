
// function to make all the last names capitalized in the given array - Task 2
module.exports = function makeLastNameUpperCase(members) {  
    return members.map(member => {
        const name = member.name.split(' ');
        name[1] = name[1].toUpperCase();
        return {
            ...member,
            name: name.join(' ')
        }
    })
}