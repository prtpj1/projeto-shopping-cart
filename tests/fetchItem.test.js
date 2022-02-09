require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Test if fetchItem is a function',
    async () => {
      expect(typeof fetchItem).toBe('function');
    });
  it('Test if when called fetchItem(\'MLB1615760527\') fetch returns',
    async () => {
      await fetchItem('MLB1615760527');

      expect(fetch).toHaveBeenCalled();
    });
  it('Test if fetch use the correct endpoint URL when the function fetchItem(\'MLB1615760527\') is called',
    async () => {
      await fetchItem('MLB1615760527');

      expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
    });
    it('Test if the function fetchItem(\'MLB1615760527\') return is a data structure equal to object \'item\' been imported',
    async () => {
      const products = await fetchItem('MLB1615760527');

      expect(products).toMatchObject(item);
    });
    it('Test if the function fetchItem called without parameters return an error message: \'You must provide an url\'',
    async () => {
      const noProducts = await fetchItem();
      
      expect(noProducts).toEqual(new Error('You must provide an url'));
    });
  // fail('Teste vazio');
});
