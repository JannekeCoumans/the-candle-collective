import { useContext } from "react";
import { CartContext } from "contexts/CartContext";
import { StorageHandler } from "config/C4";

const CartHandler = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const add = (cartItemId, amount) => {
    let minAmount = amount || 1;
    
    // if item is ALREADY in shoppingcart
    if (
      cartItems.filter((item) => item.id === parseInt(cartItemId)).length > 0
    ) {
      edit(cartItemId, '+');
    } else {
      // if item is NOT in shoppingcart
      const array = [...cartItems];
      const newItem = {
        id: parseInt(cartItemId),
        amount: minAmount,
      };
      array.push(newItem);
      setCartItems(array);
      StorageHandler.set("shoppingcart", array);
    }
  };

  const edit = (cartItemId, sum) => {
    const array = [...cartItems];
    const itemIndex = array.findIndex((item) => item.id === parseInt(cartItemId));
    
    const itemToEdit = array[itemIndex];
    if (itemToEdit) {
      if (sum === "+") {
        itemToEdit.amount += 1;
      }
      if (sum === "-") {
        if (itemToEdit.amount <= 1) {
        } else {
          itemToEdit.amount -= 1;
        }
      }
    }
    setCartItems(array);
    StorageHandler.set("shoppingcart", array);
  };

  const remove = (cartItemId) => {
    const array = [...cartItems];
    const itemToRemove = array.findIndex(
      (item) => item.id === parseInt(cartItemId)
    );
    array.splice(itemToRemove, 1);
    setCartItems(array);
    StorageHandler.set("shoppingcart", array);
  };

  return { add, edit, remove };
};

export default CartHandler;
