let cartQuantity = 0;

function showQuantity() {
  alert(`Cart Quantity: ${cartQuantity}`);
}

function addToCart() {
  if (cartQuantity + 1 > 10) {
    alert(`The cart is full.`);
  } else {
    cartQuantity++;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}

function plas2() {
  if (cartQuantity + 2 > 10) {
    alert(`The cart is full.`);
  } else {
    cartQuantity += 2;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}

function plas3() {
  if (cartQuantity + 3 > 10) {
    alert(`The cart is full.`);
  } else {
    cartQuantity += 3;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}

function plas4() {
  if (cartQuantity + 4 > 10) {
    alert(`The cart is full.`);
  } else {
    cartQuantity += 4;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}

function plas5() {
  if (cartQuantity + 5 > 10) {
    alert(`The cart is full.`);
  } else {
    cartQuantity += 5;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}
function mainas1() {
  if (cartQuantity - 1 < 0) {
    alert(`Not enough items in the cart.`);
  } else {
    cartQuantity--;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}
function mainas2() {
  if (cartQuantity - 2 < 0) {
    alert(`Not enough items in the cart.`);
  } else {
    cartQuantity -= 2;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}
function mainas3() {
  if (cartQuantity - 3 < 0) {
    alert(`Not enough items in the cart.`);
  } else {
    cartQuantity -= 3;
    console.log(`Cart Quantity: ${cartQuantity}`);
  }
}

function resetCart() {
  cartQuantity = 0;
  console.log(`Cart was reset.`);
  console.log(`Cart Quantity: ${cartQuantity}`);
}

let Name = "Jahir";
console.log(`My name is: ${Name}`);

let cost = 5 + 2 * 3 + 9;
console.log(`Cost of Food: ${cost}`);

let tax = cost * 0.1;
console.log(`Tax (10%): $${tax}`);

let totalCost = cost + tax;
console.log(`Total cos: $${totalCost}`);


// calculator section

let calculation = '';

function add1() {
  calculation += '1';
  console.log(calculation);
}
function add2() {
  calculation += '2';
  console.log(calculation);
}
function add3() {
  calculation += '3';
  console.log(calculation);
}
function add4() {
  calculation += '4';
  console.log(calculation);
}
function add5() {
  calculation += '5';
  console.log(calculation);
}
function add6() {
  calculation += '6';
  console.log(calculation);
}
function add7() {
  calculation += '7';
  console.log(calculation);
}
function add8() {
  calculation += '8';
  console.log(calculation);
}
function add9() {
  calculation += '9';
  console.log(calculation);
}
function add0() {
  calculation += '0';
  console.log(calculation);
}
function addPoint() {
  calculation += '.';
  console.log(calculation);
}
function plass() {
  calculation += ' + ';
  console.log(calculation);
}
function mainass() {
  calculation += ' - ';
  console.log(calculation);
}
function star() {
  calculation += ' * ';
  console.log(calculation);
}
function divid() {
  calculation += ' / ';
  console.log(calculation);
}
function allClear() {
  calculation = ' ';
  console.log(calculation);
}