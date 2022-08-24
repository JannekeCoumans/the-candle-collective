import products from "../../data/products";

const calculateCartPrice = (cartItems) => {
  if (cartItems) {
    const allPrices = cartItems.map((item) => {
      const productInCart = products
        .filter((product) => {
          return item.id === parseInt(product.id);
        })
        .map((filteredProducts) => filteredProducts.price);
      return productInCart[0] * item.amount;
    });

    const totalPrice = allPrices.reduce((partial_sum, a) => partial_sum + a,0);
    return totalPrice;
  }
  return null;
};

export default calculateCartPrice;
