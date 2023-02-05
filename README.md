# Basic Product Store Website

## Pages
This is a brief overview of the functionality of the pages in this project.

### -Homepage
By a GET request, the homepage displays all of the products that are in the MongoDB collection. Each product has there own div container box that displays their preview image until you click on them to go to their specific pages for more detailed information

### -Create Product Page
By a POST request, this page makes it so that you are able to create products to be shown on the homepage.

How it works is you are given a set of inputs to give to the product you are creating. I.e, the name, price, how much is there available, etc.

The product then gets submitted to the collection on MongoDB where the data is stored.

### -Product Page
The user will be redirected to this page when they click on a product that is being shown in the homepage.

It shows the specific details of that certain item and displays whether or not the user is able to buy that item. If the item is in stock, the user will be able to double click on the buy button to buy it, removing one from the stock number on that item.

### -Edit Product Page
This page lets you edit the information on a certain product from the specific product page using a PUT request.