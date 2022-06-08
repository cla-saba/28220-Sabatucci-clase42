const request = require('supertest')('http://localhost:8008')
const expect = require('chai'.expect)
const generator = require('./generadorProductos')

describe('test de API', () => {
  describe('GET', () => {
    it('debe retornar status 200', async () => {
      let response = await request.get('/api/productos')
      expect(response.status).to.eql(200)
    })
  })

  describe('POST', () => {
    it('debe agregar un producto', async () => {
      let producto = generator.get()
      let response = await request.post('/api/productos').send(producto)
      const prod = response.body
      expect(prod).to.include.keys('title', 'price', 'thumbnail')
      expect(prod.title).to.eql(producto.title)
      expect(prod.price).to.eql(producto.price)
      expect(prod.thumbnail).to.eql(producto.thumbnail)
    })
  })
})