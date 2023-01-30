//page redirections

//create page button
let createProductPage = document.getElementById('create-product-redirect')
createProductPage.addEventListener('click', () =>
{
    window.location.href='./CREATE'
})

// //edit product button
// let editProductPage = document.getElementById('edit-product-redirect');
// editProductPage.addEventListener('click', () =>
// {
//     window.location.href='./EDIT'
// })

//display all of the products on the page
let productListContainer = document.getElementById('products');

const getProductData = async () =>
{
    let data = await fetch('http://localhost:5000/get_products');
    data.json().then((parsedData) =>
    {
        console.log(parsedData);
        parsedData.forEach((object) =>
        {
            //product container box that will have the name and image of each product in the database
            let divTag = document.createElement('div');
            divTag.id = "product-container";

            //header tag to append to the div container
            let hTag = document.createElement('h3');
            hTag.innerHTML = object.name;
            hTag.id = object._id
            //img div tag to append the image too
            let imgDivTag = document.createElement('div');
            imgDivTag.id = "product-img";
            let imgTag = document.createElement('img');
            imgTag.src = object.image;
            imgTag.width = 200;
            imgTag.height = 200;
            imgDivTag.appendChild(imgTag);

            divTag.style.borderStyle = 'solid';
            divTag.style.borderColor = '#1d7464';
            divTag.style.borderRadius = '20px';
            divTag.appendChild(imgDivTag);
            divTag.appendChild(hTag);
            productListContainer.appendChild(divTag);

            hTag.addEventListener('click', () =>
            {
                window.location.href= `./SINGLE_PRODUCT/?idInQuery=${event.target.id}`;
            })

            //Mouseover event listeners that highlights the contents istead of the box
            //Maybe will just have the h3 tag highlight when moused over instead.
            // soloProductTag.addEventListener('mouseover', () =>
            // {
            //     event.target.style.backgroundColor = '#b0884c';
            // })
            // soloProductTag.addEventListener('mouseout', () =>
            // {
            //     event.target.style.backgroundColor = '#d0aa6f';
            // })
        })
    })
}

getProductData()