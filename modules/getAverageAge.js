// function to get the average rate of members Task - 4
module.exports = function getAverageAge(members) {
    return members.reduce((acc, member) => {
        if (member.age) {
            acc += member.age;
        }
        return acc;
    }, 0) / members.length;
}