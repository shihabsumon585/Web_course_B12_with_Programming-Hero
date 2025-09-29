/**
 * 1. to get something from local storage, you will get it as a string
 * 2. convert this to javascript object/array
 * 
 */


const getCartFromLocalStorage = () =>  {
    const storedCartString = localStorage.getItem("cart");
    if(storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStorage = (cart) => {
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];

    // save new cart to the local storage
    saveCartToLocalStorage(newCart)    ;
}

export { getCartFromLocalStorage as getStoredCart, addItemToCartLocalStorage as addToStoredCart}