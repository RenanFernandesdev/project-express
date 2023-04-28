const port = 3003;

const express = require('express');
const app = express();

app.get('/products', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45}) //Convert to JSON
})
app.listen(port, () => {
    console.log('Server online');
})