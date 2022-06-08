const express = require('express');
const cookieParser = require('cookie-parser');
// const session = require('express-session');

// const MongoStore = require('connect-mongo');
// const advancedOptions = { useNewUrlParser: true, useUnifiedtopology: true };

// const logRouter = require('./routes/log.routes.js')
const productRouter = require('./routes/products.routes.js')

// ** Memoria ** //
// const ProductsMemo = require('./api/productsMemo.js')
// const apiProducts = new ProductsMemo();

// ** File System ** //
// const ProductsFs = require('./api/productsFs.js')
// const apiProducts = new ProductsFs();
// const FileSystem = require('./api/FileSystem.js');
// const { env } = require('process');
// const apiMensajes = new FileSystem('mensajes');

// ** SQL Lite 3 ** //
// const { optionSqlite } = require('./utils/sqlite');
// const ProductsDb = require('./api/productsDb.js')
// const apiProducts = new ProductsDb(optionSqlite);

// ** MongoDB ** //
// var mongo = require('mongodb');
// const ProductsMongo = require('./api/productsMongo.js')
// const apiProducts = new ProductsMongo();

const app = require('./server').app;
const httpServer = require('./server').httpServer;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cookieParser());

// app.use(session({
//   store: MongoStore.create({
//     mongoUrl: 'mongodb://root:example@127.0.0.1:27017/',
//     mongoOptions: advancedOptions,
//   }),
//   secret: 'shhhhhhhhhhhhhhh',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 40000
//   }
// }))

const routes = express.Router()
routes.use('/api/productos', productRouter)
// routes.use('/api', logRouter)

app.use(routes)
app.set("view engine", "ejs");
app.set("views", "./views");


// -- Express -- //
const port = process.env.PORT || 8008
const server = httpServer.listen(port, () => {
  console.log(`HTTP Server in port: ${port}`)
})

server.on("error", error => { console.log(`Error en servidor ${error}`) })
