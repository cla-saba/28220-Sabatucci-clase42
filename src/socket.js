const { Server: IOServer } = require('socket.io');
const httpServer = require('./server').httpServer;

// ** Memoria ** //
const ProductsMemo = require('./api/productsMemo.js')
const apiProducts = new ProductsMemo();

const io = new IOServer(httpServer);
io.on('connection', socket => {
  console.log(`Nuevo cliente conectado: ${socket.id}`);

  io.emit('productos', apiProducts.listAll());
  // io.emit('mensajes', apiMensajes.findAll());

  socket.on('mensajeNuevo', async (normalizedData) => {
    console.log('Mensaje nuevo', socket.id, normalizedData.entities.chats.misChats);
    await apiMensajes.create(normalizedData);
    io.sockets.emit('mensajes', await apiMensajes.findAll());
  });

  socket.on('productoNuevo', product => {
    console.log('Producto nuevo', socket.id, product);
    apiProducts.addProduct(product);

    io.emit('productos', apiProducts.listAll());
    return false;
  });
});

module.exports = io;
