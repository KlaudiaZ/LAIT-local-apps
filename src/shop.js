import * as products from './shop/products';
import { loadProducts } from './shop/productList';
import { clearCart } from './shop/cart';

console.log('I am shop.js!');

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded. Ready to go!");
    loadProducts(products.default);
    clearCart();
});