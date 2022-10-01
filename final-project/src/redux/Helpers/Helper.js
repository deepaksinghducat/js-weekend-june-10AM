export const addToCartHelper = (cart, product) => {
    const CalculatedCart = {
        cartItems: cart.cartItems,
        subTotal: 0,
        taxes: 0,
        grandTotal: 0
    }

    if (cart.cartItems.length > 0) {

        let productExist = cart.cartItems.find(cartItem => cartItem.name === product.name);

        if (productExist) {
            CalculatedCart.cartItems = cart.cartItems.map(cartItem => {
                if (cartItem.name === product.name) {
                    cartItem.quantity += 1;
                }

                CalculatedCart.subTotal = cartItem.price * cartItem.quantity;
                CalculatedCart.grandTotal = parseFloat(CalculatedCart.subTotal) + parseFloat(CalculatedCart.taxes);

                return cartItem;
            })
        } else {
            CalculatedCart.cartItems = [...CalculatedCart.cartItems, { ...product, quantity: 1 }];

            CalculatedCart.cartItems.forEach(cartItem => {
                CalculatedCart.subTotal = cartItem.price * cartItem.quantity;
                CalculatedCart.grandTotal = cartItem.subTotal * cartItem.taxes;
            })
        }

    } else {
        product.quantity = 1;
        CalculatedCart.cartItems = [product];
        CalculatedCart.subTotal = product.price * product.quantity;
        CalculatedCart.grandTotal = CalculatedCart.subTotal + CalculatedCart.taxes;
    }

    console.log(CalculatedCart);

    return CalculatedCart;
}

export const removeToCartHelper = (cart, product) => {
    const CalculatedCart = {
        cartItems: cart.cartItems,
        subTotal: cart.subTotal,
        taxes: cart.taxes,
        grandTotal: cart.grandTotal
    }

    if (cart.cartItems.length > 0) {

        let removeCartItemIndex = -1;

        cart.cartItems.forEach((cartItem, index) => {
            if (cartItem.name === product.name) {
                removeCartItemIndex = index;

                return cartItem;
            }
        });

        if (removeCartItemIndex > -1 ) {

            cart.cartItems.splice(removeCartItemIndex,1);

            CalculatedCart.cartItems = cart.cartItems.map(cartItem => {
                CalculatedCart.subTotal = cartItem.price * cartItem.quantity;
                CalculatedCart.grandTotal = parseFloat(CalculatedCart.subTotal) + parseFloat(CalculatedCart.taxes);

                return cartItem;
            })
        }
    }

    return CalculatedCart;
}

