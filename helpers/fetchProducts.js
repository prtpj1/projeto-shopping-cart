const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
// fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

/*
Criar uma listagem de produtos retirados da API do ML
A listagem terá seus elementos HTML criados na função createProductItemElement() em 
script.js
O elemento criado pela função createProductItemElement() deve ser filho de <section class="items">

O endpoint: "https://api.mercadolibre.com/sites/MLB/search?q=computador"
O retorno do endpoint virá no formato json
A lista de produtos exibidos é um array do json no readme
fetchProducts precisa ser chamada no arquivo script.js
*/