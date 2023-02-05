const mongoose = require('mongoose');

const productSchema = new mongoose.Schema
({
    name: String,
    price: Number,
    stock: Number,
    nextDeliver: String,
    image: String
});

const MyProduct = mongoose.model('myproducts', productSchema);
module.exports = MyProduct;