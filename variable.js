let cartQuantity = 0;
function showQuantity() {
  console.log(`Cart Quantity: ${cartQuantity}`);
}
function addToCart() {
  cartQuantity++;
  console.log(`Cart Quantity: ${cartQuantity}`);
}
function plas2() {
  cartQuantity += 2;
  console.log(`Cart Quantity: ${cartQuantity}`);
}
function plas3() {
  cartQuantity += 3;
  console.log(`Cart Quantity: ${cartQuantity}`);
}
function resetCart() {
  cartQuantity = 0;
  console.log(`Cart was reset.`);
  console.log(`Cart Quantity: ${cartQuantity}`);
}