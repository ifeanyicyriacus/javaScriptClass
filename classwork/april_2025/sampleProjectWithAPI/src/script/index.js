const PRODUCT_URL = "https://fakestoreapi.com/products";

const productContainer = document.querySelector(".products");
// const productWrapper = document.getElementsByClassName("products");

// // using promise
// const getProducts = (url) => {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displayProducts(data))
//         .catch(err => console.log(err));
//
//
// };

const getProducts = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.error(error);
    }
}


let total = 0

function displayProducts(products) {
    products.forEach((product) => {
        const {id, title, price, description, image} = product;
        const htmlDivElement = document.createElement("div");
        htmlDivElement.classList.add("product");

        htmlDivElement.addEventListener("click", (e) => {
            total += price
            console.log("You clicked on " + title);
            console.log("Your total is = "  + total);
        })
        createInnerHTML(htmlDivElement, image, title, price, description);
        productContainer.append(htmlDivElement);
    });
}

function createInnerHTML(htmlDivElement, image, title, price, description) {
    htmlDivElement.innerHTML = `
            <img src="${image}" alt="">
            <div>
                <p>${title}</p>
                <p>price: ₦ ${price}</p>
            </div>
            <p>${description}</p>
        `
}

getProducts(PRODUCT_URL);

