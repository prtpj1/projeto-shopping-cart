require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Test the function fecthProducts', () => {
  it('Checks if fetchProducts is a function',
    async () => {
      expect(typeof fetchProducts).toBe('function');
    });
  it('Check if when called fetchProducts(\'computador\') fetch returns', 
  async () => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(url);
  })
  // fail('Teste vazio');
});
