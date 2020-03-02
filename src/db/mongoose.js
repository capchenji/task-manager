const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
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