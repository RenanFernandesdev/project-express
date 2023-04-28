const port = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./dataBase');
 

app.use(bodyParser.urlencoded({
  extended: true
}));



app.get('/products', (req, res, next) => 
    res.send(db.getProducts()) //Convert to JSON
);
app.get('/products/:id', (req, res) => 
    res.send(db.getProduct(req.params.id))
);

app.post('/products', (req, res, next) => {
    const product = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.listen(port, () => {
    console.log('Server online');
});