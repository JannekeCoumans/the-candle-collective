import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { products } from '../C4';

const GetCartItems = () => {
  const { cartItems } = useContext(CartContext);
  const [ totalProductsInCart, setTotalProductsInCart ] = useState(null);
  const [ fullCartItems, setFullCartItems ] = useState([]);
  if (cartItems && cartItems.length > 0) {
  const total = cartItems.reduce((a, b) => ({amount: a.amount + b.amount}));
  setTotalProductsInCart(total.amount);
  const fullProducts = cartItems.map(item => {
    const product = products.filter(product => {
      return product.id === item.id;
    })
    return {product: product, amount: item.amount};
  });
  setFullCartItems(fullProducts);
  }
  console.log(totalProductsInCart, fullCartItems);
};

export default GetCartItems;