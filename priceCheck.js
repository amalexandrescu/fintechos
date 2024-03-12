// PRICE CHECK

const priceCheck = (products, productPrices, productSold, soldPrice) => {
  const productsWithPrices = {};

  for (let i = 0; i < products.length; i++) {
    const productName = products[i];
    const productPrice = productPrices[i];
    productsWithPrices[productName] = productPrice;
  }

  let wrongPrices = 0;

  for (let i = 0; i < productSold.length; i++) {
    const productPrice = productsWithPrices[productSold[i]];
    if (soldPrice[i] !== productPrice) {
      wrongPrices++;
    }
  }

  console.log(productsWithPrices);
  console.log("wrongPrices", wrongPrices);
  return wrongPrices;
};

// const products = ["eggs", "milk", "cheese"];
// const productPrices = [2.89, 3.29, 5.79];
// const productSold = ["eggs", "eggs", "cheese", "milk"];
// const soldPrice = [2.89, 2.99, 5.97, 3.29];

const products = ["rice", "sugar", "wheat", "cheese"];
const productPrices = [16.89, 56.92, 20.89, 345.99];
const productSold = ["rice", "cheese"];
const soldPrice = [16.89, 345.99];

priceCheck(products, productPrices, productSold, soldPrice);
