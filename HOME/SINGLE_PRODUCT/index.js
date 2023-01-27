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

    console.log(finalData.name);
}

getSingleProduct();

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