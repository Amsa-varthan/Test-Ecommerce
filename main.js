const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      image: "https://picsum.photos/id/1011/200/150"
    },
    {
      id: 2,
      name: "Backpack",
      price: 899,
      image: "https://picsum.photos/id/1015/200/150"
    },
    {
      id: 3,
      name: "Sneakers",
      price: 1499,
      image: "https://picsum.photos/id/1016/200/150"
    }
  ];
  
  let cart = [];
  
  const productList = document.getElementById("product-list");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const viewCartButton = document.getElementById("view-cart-button");
  const checkoutButton = document.getElementById("checkout-button");
  
  function renderProducts() {
    products.forEach(product => {
      const el = document.createElement("div");
      el.className = "product";
      el.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(el);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    cartCount.textContent = cart.length;
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    cartTotal.textContent = total;
  }
  
  // Add event listeners for the new buttons
  viewCartButton.addEventListener("click", () => {
    console.log("View Cart button clicked");
  });
  
  checkoutButton.addEventListener("click", () => {
    console.log("Checkout button clicked");
  });
  renderProducts();
  
