const express = require('express');
const app = express();
const port = 2000

app.get('/',(req,res)=>{res.send('Olá mundo!!')})
app.listen(port,()=>console.log('Api rodando na porta' + port));