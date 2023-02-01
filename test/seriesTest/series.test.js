const request = require('supertest');
const server = require('../../index').server
const mongoose = require('mongoose')

describe('Test API', ()=> {
    test('test 1', async()=> {

        const res = request(await server.get('/series'))

        expect(!!res.body).toBe(true)

    })
})

afterAll(async()=>{
    mongoose.disconnect()
    server.close()
})