const saveCartItems = (product) => {
  localStorage.setItem('cartItems', JSON.stringify(product));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
