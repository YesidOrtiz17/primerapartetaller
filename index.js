const express= require('express');
const app = express();
const librosRouter = require('../proyecto2/router/librosRouter')

app.use(express.json());

app.use('/api',librosRouter);    

const PORT = 2002;
app.listen(PORT,()=>{
    console.log('el servidor corriendo',PORT);
});