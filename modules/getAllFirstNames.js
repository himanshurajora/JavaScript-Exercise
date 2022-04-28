// modules for extracting all the first name from given array - Task 1


module.exports = function getAllFirstNames(members) {
    return members.map(member => member.name.split(' ')[0]);
}