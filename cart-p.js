// Add item to the cart
function addToCart(item) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists in cart
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity += 1;
    } else {
        // If item doesn't exist, add it to cart
        cartItems.push(item);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Optionally, you can alert the user that the item was added to the cart
    alert(`${item.name} has been added to your cart.`);
}

// Example item data (replace with actual product details)
const product = {
    id: '1', // Unique ID for each product
    name: 'Blue Jeans',
    image: 'blue-jeans.jpg',
    price: 49.99,
    quantity: 1
};

// Add event listener for the Add to Cart button
document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product));
