const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '  Mike',
//     email: 'mike@kk.com    ',
//     password: 'passydeosj'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error: ', error)
// })


// const Task = mongoose.model('Task',{
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })
// const mytask = new Task({
//     description: 'Task 2      '
// })

// mytask.save().then(()=>{
//     console.log(mytask)
// }).catch((error)=>{
//     console.log('Error: ', error)
// })