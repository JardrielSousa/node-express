const express = require('express');
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoutes');
const app = express();
const port = 2000

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

userRoute(app);

app.listen(port,()=>console.log('Api rodando na porta ' + port));