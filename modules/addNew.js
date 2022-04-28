// module to add a new member to existing members array at index 2

module.exports = function addNew(members){
    // copy the existing array to a new array
    // so that original array is not modified
    var newMembers = members.slice();

    newMembers.splice(2, 0, {
        name: "Himanshu Jangid",
        age: 19
    })

    return newMembers;
}