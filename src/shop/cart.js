export const addProductToCart = (target, product) => {
    manageProducts(product);
    increasePrice(product);
}

const increasePrice = (product) => {
    const priceDisplayed = document.getElementById('cart-price').firstElementChild;
    let price = parseInt(priceDisplayed.innerText);
    price += product.price;
    priceDisplayed.innerText = price + '.00';
}

const decreasePrice = (product) => {
    const priceDisplayed = document.getElementById('cart-price').firstElementChild;
    let price = parseInt(priceDisplayed.innerText);
    price -= product.price;
    priceDisplayed.innerText = price + '.00';
}

const manageProducts = (product) => {
    const cart = document.getElementById('items-in-cart');
    const itemsInCart = cart.querySelectorAll('tr[data-id]');
    let productExists = false;
    let aux;
    itemsInCart.forEach((item) => {
        if (item.dataset.id === product.name) {
            productExists = true;
            aux = item;
        }
    });
    productExists ?
        increaseProductsAmount(product, aux) :
        createNewProduct(product, cart);
}

const createNewProduct = (product, cart) => {
    const newProduct = document.createElement('tr');
    newProduct.setAttribute('data-id', product.name);
    newProduct.innerHTML = '<td>' + product.name + '</td><td>1</td><td data-type="remove-button"><a class="remove-cart-item"><i class="fas fa-minus-square"></i></a></td>';
    addEventOnMinusButton(newProduct.querySelectorAll('td')[2], product);
    cart.appendChild(newProduct);
}

const increaseProductsAmount = (product, item) => {
    const amountOfProductsDisplayed = item.querySelectorAll('td')[1];
    let amount = parseInt(amountOfProductsDisplayed.innerText);
    amount++;
    amountOfProductsDisplayed.innerText = amount;
}

export const clearCart = () => {
    const cart = document.getElementById('items-in-cart');
    const clearCartButton = document.getElementById('clear-cart');
    clearCartButton.addEventListener('click', (e) => {
        cart.innerHTML = '';
        const priceDisplayed = document.getElementById('cart-price').firstElementChild;
        priceDisplayed.innerText = '0.00';
    });
}

const addEventOnMinusButton = (removeButton, product) => {
    removeButton.addEventListener('click', (e) => {
        const item = e.currentTarget.parentElement
        const amountOfProductsDisplayed = item.querySelectorAll('td')[1];
        let amount = parseInt(amountOfProductsDisplayed.innerText);
        if (amount > 1) {
            amount--;
            amountOfProductsDisplayed.innerText = amount;
            decreasePrice(product);
        } else {
            decreasePrice(product);
            e.currentTarget.parentElement.parentElement.removeChild(item);
        }
    });
}