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
      await fetchProducts('computador');

      expect(fetch).toHaveBeenCalled();
    });
  it('Test if fetch use the correct endpoint URL when the function fetchProducts(\'computador\') is called',
    async () => {
      await fetchProducts('computador');

      expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    });
    it('Test if the function fetchProducts(\'computador\') return is a data structure equal to object computadorSearch been imported',
    async () => {
      const products = await fetchProducts('computador');

      expect(products).toMatchObject(computadorSearch);
    });
    it('Test if the function fetchProducts called without parameters return an error message: \'You must provide an url\'',
    async () => {
      const noProducts = await fetchProducts();
      
      expect(noProducts).toEqual(new Error('You must provide an url'));
    });
  // fail('Teste vazio');
});
