const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart ul");

products.forEach((product) => {
  const addToCartButton = product.querySelector(".add-to-cart");

  addToCartButton.addEventListener("click", () => {
    const productName = product.querySelector("h2").textContent;
    const productPrice = product.querySelector("p.price").textContent;

    // Add product to cart
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
      <p>${productName}</p>
      <p>${productPrice}</p>
      <button class="remove">Remove</button>
    `;

    cart.appendChild(cartItem);

    // Remove product from cart
    const removeButton = cartItem.querySelector(".remove");
    removeButton.addEventListener("click", () => {
      cartItem.remove();
    });
  });
});
