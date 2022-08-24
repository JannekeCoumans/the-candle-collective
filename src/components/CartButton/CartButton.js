import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import cart from '../../assets/img/cart.svg';

const CartButton = (props) => {    
    const { toggleCartDrawer } = props;
    const { cartItems } = useContext(CartContext);
    const [ totalProductsInCart, setTotalProductsInCart ] = useState(null);

    useEffect(() => {
        if (cartItems && cartItems.length > 0) {
            const total = cartItems.reduce((a, b) => ({amount: a.amount + b.amount}));
            setTotalProductsInCart(total.amount);
        }
    }, [cartItems]);

    return(
        <button
            type="button"
            onClick={toggleCartDrawer}
            className="cart-button"
        >               
            <img src={cart} alt="" />
            {cartItems && cartItems.length > 0 && <div className="cart-button__badge">{totalProductsInCart}</div>}
        </button>
    )
}


export default CartButton;