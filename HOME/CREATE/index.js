let createProductButton = document.getElementById('submit-product-button');


createProductButton.addEventListener('click', async ()=>
{
    let name = document.getElementById('name-input').value;
    let price = document.getElementById('price-input').value;
    let inventory = document.getElementById('inventory-input').value;
    let nextDelivery = document.getElementById('next-delivery-input').value;
    let image = document.getElementById('image-input').value;

    const newProduct =
    {
        name,
        price,
        inventory,
        nextDelivery,
        image
    };

    let response = await fetch('http://localhost:5000/create_product',
    {
        method: "POST",
        headers: 
        {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct)
    })
    if(response.status === 200)
    {
        console.log(response);
        console.log('Upload complete!');
    } else
    {
        console.log(response);
        console.log('Upload failed :(');
    }

    window.location.href='../';
})