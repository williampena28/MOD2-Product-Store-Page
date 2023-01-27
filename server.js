const json = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config()
const MyProduct = require('./models/myproducts.js');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('HOME'));

//mongo database connect
let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.i58imot.mongodb.net/ProductDatabase?retryWrites=true&w=majority`
mongoose.set('strictQuery', false);
mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
mongoose.connection.once('open', () =>
{
    console.log('Connected to mongo');
});

//display all products in the collection
app.get('/get_products', async (req, res) =>
{
    let productList = await MyProduct.find({})
    res.send(productList);
});

//display the specific product with the specified id
app.get('/get_specific_product/:product_id', async (req, res) =>
{
    let id = req.params.product_id;

    let response = await MyProduct.findById(id);
    res.send(response);
});

app.post('/create_product', async (req, res) =>
{
    //req.body from the front end that will create our new item
    let newProduct = await MyProduct.create(req.body);
    res.send(newProduct);
});

app.delete('/delete_product/', async (req, res) =>
{
    console.log("DELETE request started");
    let response = await MyProduct.findByIdAndDelete(req.query.productId).then((product) =>
    {
        res.status(200).json(product)
    });
});

// app.put('/update_product', async (req, res) =>
// {
//     let response = await MyProduct.findById(req.body.id)
//     res.json(response)
// })

app.listen(5000, () =>
{
    console.log('Server is listening on port 5000');
})