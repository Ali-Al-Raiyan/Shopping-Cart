let products = [
  {
    id: 0,
    name: "Apple",
    price: 10,
  },
  {
    id: 1,
    name: "Mango",
    price: 20,
  },
  {
    id: 2,
    name: "Jackfruit",
    price: 30,
  },
  {
    id: 3,
    name: "Banana",
    price: 40,
  },
];

let cartItems = [
  {
    name: "Empty Cart",
    unitPrice: 0,
    totalItems: 0,
  },
];
// function increaseValue() {
//   let value = parseInt(document.getElementById("number").value, 10);
//   value = value + 1;
//   document.getElementById("number").value = value;
// }

// function decreaseValue() {
//   let value = parseInt(document.getElementById("number").value, 10);
//   value = value - 1;
//   document.getElementById("number").value = value;
// }
//
//
// Clear the cart table when "Clear Cart" button clicked and when Remove all the individual items.
function clearCart() {
  cartItems = [
    {
      name: "Empty Cart",
      unitPrice: 0,
      totalItems: 0,
    },
  ];
  const cartList = document.querySelector(".cartClass");
  const showCartList = cartItems.map((cartItem, index) => {
    let subtotalPrice = cartItem.unitPrice * cartItem.totalItems;
    let totalPrice = 0;
    document.getElementById("totalPrice").innerHTML = totalPrice;
    return `
    <tr class="emptyCart">
      <td>${cartItem.name}</td>
      <td>${cartItem.unitPrice}<span>$</span></td>
      <td>${cartItem.totalItems}</td>
      <td>${subtotalPrice}<span>$</span></td>
      <td>N/A</td>
    </tr>
    `;
  });
  cartList.innerHTML = showCartList;
}

//Generates the cart list.
function cartLoop() {
  let totalPrice = 0;
  const cartList = document.querySelector(".cartClass");
  const showCartList = cartItems.map((cartItem, index) => {
    let subtotalPrice = cartItem.unitPrice * cartItem.totalItems;
    totalPrice = totalPrice + subtotalPrice;
    document.getElementById("totalPrice").innerHTML = totalPrice;
    return `
      <tr>
        <td>${cartItem.name}</td>
        <td>${cartItem.unitPrice}<span>$</span></td>
        <td>${cartItem.totalItems}</td>
        <td>${subtotalPrice}<span>$</span></td>
        <td><button class="btn" onclick="removeItem(${index})">Remove Item</button></tv>
      </tr>
    `;
  });
  cartList.innerHTML = showCartList;
}

//Remove individual item from cart when "Remove Item" button clicked.
function removeItem(id) {
  cartItems.splice(id, 1);
  if (cartItems.length == 0) {
    clearCart();
  } else {
    cartLoop();
  }
}

//push each product to cart by product id.
function cartFill(id) {
  let productId = "number-" + String(id);
  let totalItems = document.getElementById(productId).value;
  cartItems.push({
    name: products[id].name,
    unitPrice: products[id].price,
    totalItems,
  });
  cartLoop();
}

function addToCart(id) {
  if (cartItems[0].name == "Empty Cart") {
    cartItems = [];
  }
  cartFill(id);
}
//Generates All Products List
const productList = document.querySelector(".products");
const showList = products.map((product, index) => {
  return `
      <div class="product">
        <p class="namePara">Name: ${product.name}</p>
        <p>Unit Price: ${product.price}<span>$</span></p>
        Number of item: <input type="number" class="number" id="${
          `number-` + String(product.id)
        }" value="1" />
        <br /><br />
        <button class="btn" onclick="addToCart(${
          product.id
        })">Add To Cart</button>
      </div>
  `;
});
productList.innerHTML = showList;
