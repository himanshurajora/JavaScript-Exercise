// devide members into three age groups Task - 6
module.exports = function(members) {
    var noage = []
    var young = []
    var old = []

    members.forEach(member => {
        if(member.age < 35){
            young.push(member)
        }else if(member.age > 35){
            old.push(member)
        }

        if(!member.age){
            noage.push(member)
        }
    })

    return {
        young,
        old,
        noage
    }
} 