import { CartContext } from "contexts/CartContext";
import React, { useContext } from "react";
import {
  calculateCartPrice,
  CartDrawerProduct,
  priceHandler,
  products,
} from "config/C4";
import { Link } from "react-router-dom";

const CartDrawer = ({ toggleCartDrawer, active }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={`cart-drawer ${active ? 'active' : 'closed'}`}>
      <div className="cart-drawer__background" onClick={toggleCartDrawer} />
      <div className="cart-drawer__content">
        <div className="cart-drawer__content--header">
          <button type="button" className="closeBtn" onClick={toggleCartDrawer}>
            <span className="material-icons">close</span>
          </button>
          <h1>
            Your Bag ({cartItems && cartItems.length > 0 ? cartItems.length : 0}
            )
          </h1>
          {cartItems.length > 0 && <h2>Your items are shipping for free!</h2>}
        </div>
        <div className="cart-drawer__content--products">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem, i) => {
              const product = products.filter(
                (p) => parseInt(p.id) === cartItem.id
              )[0];
              return (
                <CartDrawerProduct
                  key={i}
                  product={product}
                  cartItem={cartItem}
                />
              );
            })
          ) : (
            <div className="empty-cart">
              <h1>Your bag is currently empty!</h1>
              <p>Visit the shop to find what you're looking for.</p>
              <Link className="btn" to="/shop">
                Let's go shopping
              </Link>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-drawer__content--totalPrice">
            <span className="subTotal">Subtotal</span>
            <span className="price">€ {priceHandler(calculateCartPrice(cartItems))}</span>
            <div className="btn btn__darkgreen">Checkout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
