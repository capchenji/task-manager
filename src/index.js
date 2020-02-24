const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next)=>{
//     if (req.method=='GET'){
//         res.send('GET requests are disabled')
//     } else{
//         next()
//     }
// })

// app.use((req, res, next)=>{
//     res.status(503).send('Site is currently down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, ()=>{
    console.log('Server is up on port '+port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async() =>{
//     const token = jwt.sign({_id: 'abc1234'}, 'thisisproject', {expiresIn: '7 days'})
//     console.log(token)
//     const data = jwt.verify(token, 'thisisproject')
//     console.log(data)
// }
// myFunction()

// const pet = {
//     name: 'yy'
// }
// pet.toJSON = function(){
//     return this
// }
// console.log(JSON.stringify(pet))

const Task = require('./models/task')
const User = require('./models/user')
const main = async ()=>{
    // const task = await Task.findById('5e5241d16ccbdcb9ea5c904f')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('5e5240af779852b93cb26700')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()
