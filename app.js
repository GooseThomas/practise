const {Router} = require('express');
const router = Router()



require ("dotenv").config();
const express        = require('express')
const app            = express()
const bodyParser     = require('body-parser')
const morgan         = require('morgan')
const cors           = require('cors')

const guardRoutes     = require('./routes/guard')

app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.set('trust proxy', true);
app.use('/api'      , guardRoutes);

/** Выводим айпи адрес подключения */
app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] ,
        ip2 = req.socket.remoteAddress,
        ip3 = req.ip;
    console.log(`IP клиента: ${ip}, ${ip2}, ${ip3}`);
    next();
});

app.use('/public'  , express.static('public'))

app.get('/favicon.ico',
    (req, res)=>{
        res.status(204);
        res.end();
    });

module.exports = app