const displayPreloadedProduct = () => {
    const cart = getCart();
    for (const product in cart) {
        displayProduct(product);
    }
}
const addProduct = () => {
    const product = document.getElementById('input_field');
    const productName = product.value;

    //Calling the display product function.
    displayProduct(productName);
    //Adding to cart
    addToCart(productName);
    //Clearing the input field.
    product.value = '';
}
const displayProduct = productName => {
    const listContainer = document.getElementById('list_container');
    const listItem = document.createElement('li');
    listItem.innerText = productName;
    listContainer.appendChild(listItem);
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    }
    else {
        cartObject = {};
    }
    return cartObject;
}
const addToCart = (productName) => {
    const cart = getCart();
    if (cart[productName]) {
        cart[productName] = cart[productName] + 1;
    }
    else {
        cart[productName] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    console.log(cart);
}
const purchase = () => {
    document.getElementById('list_container').textContent = '';
    localStorage.removeItem('cart');
}
displayPreloadedProduct();