const axios = require('axios');
// import axios from 'axios';

let optionsGet = {
  url: 'https://localhost:8008/api/productos',
  method: 'GET'
}

axios(optionsGet)
  .then(response => {
    let products = response.data
    console.log(products);
  })
  .catch(error => {
    console.log(error)
  })

let res = await axios.get(optionsGet.url, {});
console.log(res);

axios.post('/api/productos', {
  title: 'Producto2',
  price: '222.33',
  thumbnail: 'http://web/foto.png'
})
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })