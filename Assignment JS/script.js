const products = []; // Array to store product objects

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Load initial product data (replace with your actual data)
products.push(new Product("Product 1", 100));
products.push(new Product("Product 2", 200));
products.push(new Product("Product 3", 300));

// DOM variables
const productList = document.getElementById("products");
const cartList = document.getElementById("cart");

// Function to render product list items dynamically
function renderProductList() {
    productList.innerHTML = ""; // Clear existing items
    for (const product of products) {
        const item = document.createElement("li");
        item.innerHTML = `
            <p>${product.name}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.name}, ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(item);
    }
}

// Function to manage adding items to the cart
let cartItems = []; // Array to store cart items

function addToCart(name, price) {
    // Check if product already exists in cart
    if (cartItems.find(item => item.name === name)) {
        alert("Product already exists in cart!");
        return;
    }

    // Add product to cart
    cartItems.push({ name, price });

    // Update cart display
    renderCart();
}

// Function to render cart items and calculate total price (optional)
function renderCart() {
    cartList.innerHTML = ""; // Clear existing items
    let totalPrice = 0;
    for (const item of cartItems) {
        const price = parseFloat(item.price); // Ensure numerical price
        totalPrice += price;
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${price.toFixed(2)}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartList.appendChild(cartItem);
    }
    
    // Display total price (optional)
    if (totalPrice > 0) {
        cartList.insertAdjacentHTML("beforeend", `<p>Total: $${totalPrice.toFixed(2)}</p>`);
    }
}

// Function to remove items from the cart
function removeFromCart(name) {
    const index = cartItems.findIndex(item => item.name === name);
    if (index !== -1) {
        cartItems.splice(index, 1);
        renderCart();
    }
}

// Render initial product list
renderProductList();
