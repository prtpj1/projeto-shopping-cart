const ITEMS_LIST = document.querySelector('.items');
const CART_LIST = document.querySelector('.cart__items');
const CART_CONTAINER = document.querySelector('.cart__container');
const EMPTY_CART_BUTTON = document.querySelector('.empty-cart');

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

// function getSkuFromProductItem(item) {
//   console.log(item.querySelector('span.item__sku'));
//   return item.querySelector('span.item__sku').innerText;
// }

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

const totalPriceValue = (total) => {
  const totalPrice = document.querySelector('.total-price');
  // totalPrice.innerHTML = `<b>Total:</b> R$ ${total
  //   .toLocaleString('pt-br')}`;
  totalPrice.innerText = total;
  // console.log(typeof totalPrice.innerText);
};

const sumPrices = () => {
  const cartListArr = Array.from(CART_LIST.children);
  // console.log(cartListArr);
  const sum = cartListArr.reduce((acc, pos) =>
    acc + Number(pos.innerText.split('$')[1]), 0);
  // console.log(sum);
  return totalPriceValue(sum);
};

function createTotalElement() {
  const totalPrice = document.createElement('section');
  totalPrice.className = 'total-price';
  CART_CONTAINER.appendChild(totalPrice);

  const prices = document.createElement('span');
  prices.className = 'prices';
  totalPrice.appendChild(prices);
}
function cartItemClickListener(event) {
  event.target.remove();
  sumPrices();
}

const emptyCart = () => {
  CART_LIST.innerHTML = '';
  sumPrices();
  const totalPrice = document.querySelector('.total-price');
  totalPrice.innerHTML = '';
};

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} |\n NAME: ${name} |\n\n PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  CART_LIST.appendChild(li);
  // console.log(salePrice);

  return (li);
}
const createLoading = () => {
  const imgSrc = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
  const loading = document.createElement('div');
  loading.className = 'loading';
  loading.innerText = 'carregando...';
  
  ITEMS_LIST.appendChild(loading);
  loading.appendChild(createProductImageElement(imgSrc));
};

const hideLoading = () => {
  ITEMS_LIST.firstElementChild.remove();
};

const productList = async () => {
  const products = await fetchProducts('computador');
  products.results.forEach((product) => {
  ITEMS_LIST.appendChild(createProductItemElement(product));
});

  hideLoading();
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
  sumPrices();
};

window.onload = () => {
  createLoading();
  setTimeout((productList), 2000);
  createTotalElement();
  ITEMS_LIST.addEventListener('click', addToCart);
  EMPTY_CART_BUTTON.addEventListener('click', emptyCart);
};