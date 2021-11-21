const express = require('express');
const app = express();

const PORT = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/bookstore-frontend'));

app.get('/*',(req, res) => {
    res.sendFile(__dirname + '/dist/bookstore-frontend/index.html');
});

app.listen(PORT,()=>{
    console.log('Servidor rodando na port: ' + PORT);
})