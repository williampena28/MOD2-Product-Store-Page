//page redirections

//create page button
let createProductPage = document.getElementById('create-product-redirect')
createProductPage.addEventListener('click', () =>
{
    window.location.href='./CREATE'
})

//edit product button
let editProductPage = document.getElementById('edit-product-redirect');
editProductPage.addEventListener('click', () =>
{
    window.location.href='./EDIT'
})

//display all of the products on the page
let productContainerElement = document.getElementById('products');

const getProductData = async () =>
{
    let data = await fetch('http://localhost:5000/get_products');
    data.json().then((parsedData) =>
    {
        console.log(parsedData);
        parsedData.forEach((object) =>
        {
            let hTag = document.createElement('h3');
            hTag.innerHTML = object.name;

            productContainerElement.appendChild(hTag);
        })
    })
}

getProductData();