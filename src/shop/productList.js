import { addProductToCart } from './cart';

export const loadProducts = (products) => {
    const productList = document.getElementById('products');
    products.forEach((product, index) => {
        createProduct(productList, product);
        addEventOnCartButtons(index, product);
    });
}

const createProduct = (list, product) => {
    const productDOM = document.createElement('div');
    productDOM.setAttribute('class', 'box product');
    productDOM.setAttribute('id', product.id);
    productDOM.innerHTML = '<article class="media"><div class="media-left"><figure class="image is-64x64"><img src=' + product.img + ' alt="Image"></figure></div><div class="media-content"><div class="content"><p><strong>' + product.name + '</strong> for only </small><b>' + product.price + '</b><br>' + product.description + '</p></div><nav class="level is-mobile"><div class="level-left"><a class="level-item" class="product-button-buy"><span class="icon is-small" data-type="cart"><i class="fas fa-shopping-cart"></i></span></a></div></nav></div></article>';
    list.appendChild(productDOM);
}

const addEventOnCartButtons = (index, product) => {
    const cartButton = document.querySelectorAll('span[data-type=cart]')[index];
    cartButton.addEventListener('click', (e) => {
        addProductToCart(e.currentTarget, product);
    });
}