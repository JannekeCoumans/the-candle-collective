import React from "react";
import { AmountChanger, Image, priceHandler } from "../../config/C4";

const CartDrawerProduct = ({ product, cartItem }) => {
  const {
    title,
    price,
    additionalInfo: { short },
    featured_image,
  } = product;

  return (
    <div className="cart-drawer-product">
      <Image
        src={`products/${featured_image}`}
        alt={title}
        className="cart-drawer-product__image"
      />
      <div className="cart-drawer-product__text">
        <div className="cart-drawer-product__text--info">
          <h2>{title}</h2>
          <p>{short}</p>
        </div>
        <div className="cart-drawer-product__text--price">
          € {priceHandler(price * cartItem.amount)}
        </div>
        <div className="cart-drawer-product__text--amount">
          <AmountChanger id={cartItem.id} amount={cartItem.amount}/>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerProduct;
