const mongoose = require('mongoose');

const productSchema = new mongoose.Schema
({
    name: String,
    price: Number,
    inventory: Number,
    nextDeliver: String,
    image: String
});

const MyProduct = mongoose.model('myproducts', productSchema);
module.exports = MyProduct;