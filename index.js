const express = require('express')
const { Router } = express
const app = express()
const routerProducts = require('./api/productManager/products.routes')
const routerCart = require('./api/cart/cart.routes')
const handlebars = require('express-handlebars')
const homeRouter = require('./routes/home.routes')
const realTimeRouter = require('./routes/realtime.routes')
const indexRouter = require('./routes/index.routes')
const ProductManager = require('./api/productManager/ProductManager')

app.use('/products', routerProducts)
app.use('/cart', routerCart)
app.use('/home', homeRouter)
app.use('/realtime', realTimeRouter)
app.use('/index',indexRouter )



//public

app.use(express.static(__dirname + '/public'))

//handlebars

app.engine('handlebars', handlebars.engine()) 
app.set('view engine','handlebars')
app.set('views', __dirname + '/views')

//socket
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (req,res) => {
  res.send('Bienvenidos a la pre-entrega1 !')
})


server.listen(8080, () => {
  console.log('server corriendo')
})

io.on('connection', async (socket) => {
  console.log('Nuevo cliente conectado');
  let product = new ProductManager()
  product =  await product.getProducts()
  io.sockets.emit('products', product);

});





