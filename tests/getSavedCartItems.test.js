const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Test the function getSavedCartItems', () => {
  it('Test if when the fn saveCartItems(<ol><li>Item</li></ol>) is called the method localStorage.setItem is called', () => {
    
  });
  // fail('Teste vazio');
});
