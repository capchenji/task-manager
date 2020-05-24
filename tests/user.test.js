const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async ()=>{
    await request(app).post('/users').send({
        name: 'Jason',
        email: 'jason@example.com',
        password: 'Mypassword777!'

    }).expect(201)
})