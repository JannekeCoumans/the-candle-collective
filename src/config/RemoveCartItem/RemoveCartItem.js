const RemoveCartItem = (id) => {
    let existingCartItems = JSON.parse(localStorage.getItem('cart'));
    const itemToRemove = existingCartItems.findIndex(itemToChange => itemToChange.id === id);
    existingCartItems.splice(itemToRemove, 1);
    localStorage.setItem('cart', JSON.stringify(existingCartItems));
}

export default RemoveCartItem;