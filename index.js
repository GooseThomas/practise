
const app = require('./app')

const port = process.env.PORT || 5000
console.log('process..env.PORT',process.env.PORT)
app.listen(port,() => console.log(`Sever ZAVOD has been started! on ${port} port)`))