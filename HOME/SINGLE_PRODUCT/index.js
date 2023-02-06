//get the id from the url
const params = new Proxy(new URLSearchParams(window.location.search), 
{
    get: (searchParams, prop) => searchParams.get(prop),
});
//get the value of "some key" in "https://example.com/?some_key=some_value"
let id = params.idInQuery;

//put all product content in this div
let productContainer = document.getElementById('product-box');
//grab all the content from the page
let pageContent = document.getElementById('page-content');

//use that ID to get info from collection
//display that data in our html
const getSingleProduct = async () =>
{
    let response = await fetch(`http://localhost:5000/get_specific_product/${id}`)
    let finalData = await response.json();

    let imageTag = document.createElement('img');
    imageTag.src= finalData.image;
    imageTag.width=500;
    imageTag.height=500;

    let hTag = document.createElement('h1')
    hTag.innerHTML = `${finalData.name}<br>${finalData.desc}<br>Price: $${finalData.price}<br>Stock: ${finalData.stock}`;
    productContainer.appendChild(imageTag);
    productContainer.appendChild(hTag);

    //create buy button
    let buyButtonContainer = document.createElement('div');
    buyButtonContainer.id = 'buyButtonContainer';
    let buyButtonText = document.createElement('h2');

    //create update product link
    let updateProductLink = document.createElement('h2');
    updateProductLink.id = 'updateProductLink';

    //create delete button
    let deleteButtonContainer = document.createElement('div');
    deleteButtonContainer.id = 'deleteProductContainer';
    let deleteButtonText = document.createElement('h2');
    deleteButtonText.innerHTML = 'Delete Product';
    deleteButtonContainer.appendChild(deleteButtonText);

    //delete button action + button highlight event
    deleteButtonContainer.addEventListener('click', async () =>
    {
        let response = await fetch(`http://localhost:5000/delete_product/?productId=${id}`, 
        {
            method: "DELETE",
            headers:
            {
                'Content-Type': 'application/json',
            },
        });
        window.location.href = '../'
    })

    deleteButtonContainer.addEventListener('mouseover', () =>
    {
        deleteButtonText.style.color = "#e15252";
        deleteButtonContainer.style.backgroundColor = "#ab1b1b";
    })
    deleteButtonContainer.addEventListener('mouseout', () =>
    {
        deleteButtonText.style.color = "#ab1b1b";
        deleteButtonContainer.style.backgroundColor = "#e15252";
    })

    //if stock is 0 or less, grey out the buy button
    if(finalData.stock > 0)
    {
        buyButtonText.innerHTML = "BUY";
        buyButtonText.style.color = '#33C625';

        //After clicking the buy button twice, the PUT request will function for the
        //rest of the clicks
        buyButtonContainer.addEventListener('click', async () =>
        {

            console.log('Cliked!');
            //fetch put request to decriment the stock=
            let response = await fetch(`http://localhost:5000/update_product/${id}`,
            {
                method: "PUT",
                headers: 
                {
                    'Content-Type': 'application/json',
                },
                body: 
                    JSON.stringify
                    ({
                        //send new inventory information
                        stock: finalData.stock--,
                    })
            })
        })
        buyButtonContainer.addEventListener('mouseover', () =>
        {
            buyButtonContainer.style.backgroundColor = '#33C625';
            buyButtonContainer.style.borderColor = '#33C625';
            buyButtonText.style.color = '#4DDE3F';
        })
        buyButtonContainer.addEventListener('mouseout', () =>
        {
            buyButtonContainer.style.backgroundColor = '#4DDE3F';
            buyButtonText.style.color = '#33C625';
        })
        buyButtonContainer.appendChild(buyButtonText);
        productContainer.appendChild(buyButtonContainer);
    }

    productContainer.appendChild(deleteButtonContainer);
    pageContent.appendChild(productContainer);
}

getSingleProduct();

//update page button
let updatePageButton = document.getElementById('update-page');
updatePageButton.addEventListener('click', async () =>
{
    window.location.href=`../EDIT/?idInQuery=${id}`;
})