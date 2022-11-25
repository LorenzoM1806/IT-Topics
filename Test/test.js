const request = require ('supertest');
//test
describe('get campus', () => {
    it('should return first campus', async () => {
        await request('https://campus-api-example.netlify.app')
        .get('/.netlify/functions/api/campus')
        .expect(200)
        .expect('content-type', 'application/json; charset=utf-8')
        .expect((res) => {
            console.log(res.body[0])
        })
    })
})