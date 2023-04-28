const sequence = {
    _id: 1,
    get id() { return this._id++; }
}

const product = {}

function saveProduct(product){
    if(!product.id) product.id = sequence.id;
    product[product.id] = product;
    return product;
}

function getProduct(id){
    return product[id] || {}
}

function getProducts(){
    return Object.values(product);
}

module.exports = { saveProduct, getProduct, getProducts }