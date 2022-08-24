import React, { createContext, useEffect, useState } from "react";
import { StorageHandler } from 'config/C4';

export const CartContext = createContext();

const checkStorageItems = (callback) => {
  const storageItems = StorageHandler.get('shoppingcart');
  if (storageItems && storageItems.length > 0) {
    callback(storageItems);
  }
}

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems.length === 0) {
      checkStorageItems(setCartItems);
    }
  }, [cartItems, setCartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
