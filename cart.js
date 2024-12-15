// Load cart items from localStorage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear current cart display
    cartItemsContainer.innerHTML = '';

    // Add each item to the cart display
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        // Update total price
        totalPrice += item.price * item.quantity;
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Add event listeners for remove buttons
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Remove item from the cart
function removeItem(event) {
    const itemId = event.target.getAttribute('data-id');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove item by id
    cartItems = cartItems.filter(item => item.id !== itemId);

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Reload the cart
    loadCart();
}

// Initialize the cart page
document.addEventListener('DOMContentLoaded', loadCart);
