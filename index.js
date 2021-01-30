const express = require('express');
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoutes');
const app = express();
const port = 2000

userRoute(app);
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{res.send('Olá mundo!!')})
app.listen(port,()=>console.log('Api rodando na porta' + port));