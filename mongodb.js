// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.toHexString())

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client
)=>{
    if (error){
        return console.log('unable to connect')
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Jimmy',
    //     age:28
    // }, (error, result)=>{
    //     if (error){
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').findOne({_id:new ObjectID('5e3c230dfd68841b368382ee')}, (error, user)=>{
    //     if(error){
    //         return console.log('unable to find')
    //     }
    //     console.log(user)
    // })
    // db.collection('tasks').findOne({completed:false}, (error, tasks)=>{
    //     if(error){
    //         return console.log('unable to find')
    //     }
    //     console.log(tasks)
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5e3c1fb43121c31918ba3a82')
    // },{
    //     $inc:{
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //    $set:{
    //        completed: true
    //    } 
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('users').deleteMany({
        age: 21
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

})
