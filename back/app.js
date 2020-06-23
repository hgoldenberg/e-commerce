const express = require('express');
const volleyball = require('volleyball');

require('dotenv').config()
const app = express()
const db = require('./config/db')
const port = process.env.PORT
const router = require('./routes')

// req.body
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// middlewere
app.use(volleyball);

//router
app.use('/api', router);

app.use((err , req, res, next) =>{
    res.status(500).json(err)
});

// conectando con la base de datos 
db.sync({force:false})
    .then(()=>{
        app.listen(port , ()=>{
            console.log(`Escuchando en el puerto ${port}`)
        })
    })
    .catch(console.log)