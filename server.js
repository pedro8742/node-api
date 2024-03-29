const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//iniciando DB
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi', 
    {useNewUrlParser: true}
);
requireDir('src/models');


//Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);