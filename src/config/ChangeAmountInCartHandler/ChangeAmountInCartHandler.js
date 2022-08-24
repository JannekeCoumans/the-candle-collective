import RemoveCartItem from "../RemoveCartItem/RemoveCartItem";

const ChangeAmountInCartHandler = (item, amount) => {
  let existingCartItems = JSON.parse(localStorage.getItem('cart'));
  const itemToChange = existingCartItems.findIndex(itemToChange => itemToChange.id === item);
  if (existingCartItems[itemToChange].amount === 1 && amount === -1) {
    RemoveCartItem(item);
  } else {
    existingCartItems[itemToChange].amount = existingCartItems[itemToChange].amount + amount
    localStorage.setItem('cart', JSON.stringify(existingCartItems));
  }
}

export default ChangeAmountInCartHandler;