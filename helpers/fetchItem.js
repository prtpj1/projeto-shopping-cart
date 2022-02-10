const fetchItem = async (product) => {
  const url = `https://api.mercadolibre.com/items/${product}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
// fetchItem('MLB1341706310');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
