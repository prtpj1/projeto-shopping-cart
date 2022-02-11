const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Test if when run the fn saveCartItems(<ol><li>Item</li></ol>) the method localStorage.setItem is called', () => {
    saveCartItems('<li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Test if when run the fn saveCartItems(<ol><li>Item</li></ol>)the method localStorage.setItem is called with two parameters: \'cartItems\' and the value passed as argument', () => {
    saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify('<ol><li>Item</li></ol>'));
  });
  // fail('Teste vazio');
});
