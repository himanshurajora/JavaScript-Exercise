// add new member at index 0
module.exports = function addNewOnce(members) {
    members.splice(0, 0, {
        name: "Ankit Choudhary",
        age: 20
    })
}