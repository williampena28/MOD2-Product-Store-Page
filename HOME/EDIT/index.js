let updateProductButton = document.getElementById('update-product-button');

//get the id from the url
const params = new Proxy(new URLSearchParams(window.location.search), 
{
    get: (searchParams, prop) => searchParams.get(prop),
});

let id = params.idInQuery;

updateProductButton.addEventListener('click', async ()=>
{
    
    let name = document.getElementById('name-input').value;
    let price = document.getElementById('price-input').value;
    let inventory = document.getElementById('inventory-input').value;
    let nextDelivery = document.getElementById('next-delivery-input').value;
    let image = document.getElementById('image-input').value;

    const updatedProduct =
    {
        name,
        price,
        inventory,
        nextDelivery,
        image
    }

    let response = await fetch(`http://localhost:5000/update_product/${id}`,
    {
        method: "PUT",
        headers: 
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct)
    })
    window.location.href=`../`
})