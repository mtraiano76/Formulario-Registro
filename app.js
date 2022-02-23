const express = require('express');

const app = express();

app.use(express.static('./public'));
app.listen(3000,()=> console.log('Servidor levanto en puerto 3000'));

//Template engine
app.set('view engine', 'ejs');

//Routers
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/', mainRoutes);
app.use('/user', userRoutes);



module.exports = app
