import request from 'supertest'
const server = request('http://localhost:3000')

describe('HelloWorld', () => {
  it('returns a 200 response', () => {
    return server
      .get('/hello')
      .expect(200)
      .then(res => {
        expect(res.text).toEqual('responseText')
      })
  })
})
