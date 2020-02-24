require('../src/db/mongoose')
const Task = require('../src/models/task')

//5e3fce4d3a344f0e18940608
// Task.findByIdAndDelete('5e3fca91adfcd60b9d2aea0c').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5e3fddefd788d2199b5b2266').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})