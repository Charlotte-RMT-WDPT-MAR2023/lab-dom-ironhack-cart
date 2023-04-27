// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerHTML);
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = price * quantity;

  product.querySelector(".subtotal").textContent = `$${subtotal}`;
  return subtotal;
}

// ITERATION 2

function calculateAll() {
  const products = document.getElementsByClassName("product");
  let subtotals = [];

  for (i = 0; i < products.length; i++) {
    subtotals.push(updateSubtotal(products[i]));
  }

  // ITERATION 3

  const total = subtotals.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  document.querySelector("#total-value span").textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
