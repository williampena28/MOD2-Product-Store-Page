//put all product content in this div
let productContainer = document.getElementById('product-box');

//get the id from the url
const params = new Proxy(new URLSearchParams(window.location.search), 
{
    get: (searchParams, prop) => searchParams.get(prop),
});
//get the value of "some key" in "https://example.com/?some_key=some_value"
let id = params.idInQuery;

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
    hTag.innerHTML = `Name: ${finalData.name}<br>Price: ${finalData.price}<br>Stock: ${finalData.inventory}`;
    productContainer.appendChild(imageTag);
    productContainer.appendChild(hTag);

    //create buy button
    let buyButtonContainer = document.createElement('div');
    buyButtonContainer.id = 'buyButtonContainer';
    let buyButtonText = document.createElement('h2');

    //if stock is 0 or less, grey out the buy button
    if(finalData.inventory > 0)
    {
        buyButtonText.innerHTML = "BUY";
        buyButtonText.style.color = '#33C625';

        buyButtonContainer.addEventListener('click', async () =>
        {

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
                        name: finalData.name,
                        price: finalData.price,
                        inventory: finalData.inventory--,
                        image: finalData.image
                    })
            })
        })
    }

    buyButtonContainer.appendChild(buyButtonText);
    productContainer.appendChild(buyButtonContainer);
}

getSingleProduct();

//Update and delete buttons
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', async () =>
{
    let response = await fetch(`http://localhost:5000/delete_product/?productId=${id}`, 
    {
        method: "DELETE",
        headers:
        {
            'Content-Type': 'application/json',
        },
    });
    window.location.href='../'
})

let updatePageButton = document.getElementById('update-page');
updatePageButton.addEventListener('click', async () =>
{
    window.location.href=`../EDIT/?idInQuery=${id}`;
})