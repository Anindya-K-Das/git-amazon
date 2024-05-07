import {cart, addtoCart} from '../data/cart.js';

import {products} from '../data/products.js';

function renderAmazonPage(){ 
    let productsHtml = '';
    products.forEach((product) =>{  //function productsLoop(product)
        productsHtml += `
        <div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
            $${(product.priceCents /100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id = "${product.id}"> 
            Add to Cart
            </button>
    </div>`;
    });
    document.querySelector('.productGridJs').innerHTML = productsHtml;

    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
        button.addEventListener('click', () =>{
            const productId = button.dataset.productId; //data set name goes from kebab case to camel case
            addtoCart(productId);

            updateCart();
            console.log(updateCart)
            console.log(document.querySelector('.js-cartQuant').innerHTML)
            
        });
    });

    function updateCart(){
        let cartQauntity = 0;
        cart.forEach((cartItem) => {
            cartQauntity += cartItem.quantity;
        });
        console.log(cartQauntity);
        document.querySelector('.js-cartQuant').innerHTML = cartQauntity;
        renderAmazonPage();
    }
}

renderAmazonPage();