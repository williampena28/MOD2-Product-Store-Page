# Basic Product Store Website

# [Video Showcasing The Website Here](https://www.youtube.com/watch?v=N7b4A0ruNq0)

## Pages
This is a brief overview of the functionality of the pages in this project.

### -Homepage
By a GET request, the homepage displays all of the products that are in the MongoDB collection. Each product has there own div container box that displays their preview image until you click on them to go to their specific pages for more detailed information

Displays a create product button at the very top that redirects the user to a form page to create a new product

### -Create Product Page
By a POST request, this page makes it so that you are able to create products to be shown on the homepage.

How it works is you are given a set of inputs to give to the product you are creating. I.e, the name, price, stock, etc.

The product then gets submitted to the collection on MongoDB where the data is stored.

### -Product Page
The user will be redirected to this page when they click on a product that is being shown in the homepage.

It shows the specific details of that certain item and displays whether or not the user is able to buy that item. If the item is in stock, the user will be able to double click on the buy button to buy it, removing one from the stock number on that item.

A buy button is rendered when the document from the collection being displayed has a stock value of more than 0

A delete button is rendered and whenever clicked will send a DELETE request to delete the document displayed on the page from the database collection

### -Edit Product Page
This page lets you edit the information on a certain product from the specific product page using a PUT request.