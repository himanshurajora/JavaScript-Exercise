// modules for extracting all the first name from given array


module.exports = function getAllFirstNames(members) {
    return members.map(member => member.name.split(' ')[0]);
}