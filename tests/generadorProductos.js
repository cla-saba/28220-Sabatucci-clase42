const { faker } = require('@faker-js/faker')

const get = () => ({
  title: faker.commerce.productName(),
  price: faker.commerce.price(),
  thumbnail: faker.image.avatar()
})

module.exports = { get }