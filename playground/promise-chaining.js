require('../src/db/mongoose')
const User = require('../src/models/user')

//5e3fce4d3a344f0e18940608
User.findByIdAndUpdate('5e3fdb5266489e17bb9b9360', {age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

const updateAgeAndCount = async (id, age)=>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5e3fdb5266489e17bb9b9360', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})