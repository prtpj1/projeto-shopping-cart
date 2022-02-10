const SECTION = document.querySelector('.items');
const ITEMS = document.querySelector('.items');
const CART_ITEMS = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image, price: salePrice }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// function getSkuFromProductItem(item) {
// return item.querySelector('span.item__sku').innerText;
// }

// function cartItemClickListener(event) {
//   // coloque seu código aqui
// }

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${sku} \n NAME: ${name} \n \n PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  CART_ITEMS.appendChild(li);
  // return li;
}

const productList = async () => {
  const products = await fetchProducts('computador');
  // console.log(products);
  products.results.forEach((product) => {
    SECTION.appendChild(createProductItemElement(product));
  });
};

const addToCart = async (e) => {
    const id = e.target.parentNode.firstChild.innerText;
    // console.log(id);
    const data = await fetchItem(id);
    createCartItemElement({
      sku: data.id,
      name: data.title,
      salePrice: data.price,
    });
    // console.log(data.price);  
};

window.onload = () => {
  productList();
  ITEMS.addEventListener('click', addToCart);
};