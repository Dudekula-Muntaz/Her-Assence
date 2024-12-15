// Show the pop-up after 10 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup-form').style.display = 'flex'; // Show the pop-up
    }, 10000); // 10 seconds delay
}

// Close the pop-up when X is clicked
document.getElementById('close-btn').onclick = function() {
    document.getElementById('popup-form').style.display = 'none'; // Hide the pop-up
}

// Optional: To prevent clicking the pop-up "Shop Now" button from closing the pop-up, we ensure the page navigates
document.getElementById('popup-form').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button')) {
        // Navigate to products section when the "Shop Now" button is clicked
        location.href = '#products'; // This will scroll to the #products section
    }
});
