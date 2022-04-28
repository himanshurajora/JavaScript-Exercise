// function to return member with the max age Task - 5
module.exports = function getMemberWithMaximumAge(members){
    return members.reduce((max, member) => {
        if(member.age && member.age > max.age)
            return member;
        return max;
    }
    , { name: '', age: 0 });
}