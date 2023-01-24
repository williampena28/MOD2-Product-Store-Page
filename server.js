const express = require('express');
const app = express();
require('dotenv').config()
//require model here
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('HOME'));

//connection string and mongoose connection setup here

app.get('/homepage', (req, res) =>
{
    
});

app.listen(5000, () =>
{
    console.log('Server is listening on port 5000');
})