const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose }= require('./database');

//Settings (configuraciones básicas el servidor)
app.set('port', process.env.PORT || 3000);

//Middlewares (librerias)
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/teachers', require('./routers/teachers.routers'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});