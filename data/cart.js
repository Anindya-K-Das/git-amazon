export const cart = [];

export function addtoCart(productId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = item;
        }

    });
    if(matchingItem){
        matchingItem += 1;
    }else{ 
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}