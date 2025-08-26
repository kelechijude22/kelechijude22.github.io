document.addEventListener('DOMContentLoaded', () => {
    
    // --- Display Selected Flight Details ---
    const destination = localStorage.getItem('selectedFlightDestination');
    const price = localStorage.getItem('selectedFlightPrice');
    const flightSummary = document.getElementById('flight-summary');
    
    // Make sure we have flight details before continuing
    if (destination && price) {
        flightSummary.innerHTML = `
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Total Price:</strong> $${price}</p>
        `;
    } else {
        flightSummary.innerHTML = '<p>No flight selected. Please go back and choose a deal.</p>';
        document.getElementById('payment-form').style.display = 'none';
        return; // Stop the script if no flight is selected
    }

    // --- Paystack Integration Logic ---
    const paystackButton = document.getElementById('paystack-button');
    paystackButton.addEventListener('click', () => {
        
        // Get the passenger's details from the form
        const passengerEmail = document.getElementById('email').value;
        const passengerName = document.getElementById('name').value;

        // Basic validation
        if (!passengerEmail || !passengerName) {
            alert('Please enter your full name and email address.');
            return;
        }

        // --- CRITICAL: PAYSTACK AMOUNT IS IN KOBO ---
        // You must multiply the Naira amount by 100.
        // Since our price is in USD, we'll need to do a conversion first.
        // For this example, let's assume a fixed exchange rate (e.g., 1 USD = 1500 NGN).
        // In a real app, you would get this rate from an API.
        const exchangeRate = 1500; 
        const amountInNGN = price * exchangeRate;
        const amountInKobo = Math.round(amountInNGN * 100);

        // --- Create a Paystack Payment Popup ---
        let handler = PaystackPop.setup({
            key: 'pk_test_e8fe6a9e02e7e5f8654b7e5d38fc9ea73bf3a07a', // <--- PASTE YOUR KEY HERE
            email: passengerEmail,
            amount: amountInKobo,
            currency: 'NGN', // Paystack processes payments in NGN for Nigerian accounts
            ref: 'FLW-' + Math.floor((Math.random() * 1000000000) + 1), // Generate a unique reference
            
            // This function is called when payment is successful
            callback: function(response) {
                alert(`Payment successful! Transaction reference: ${response.reference}`);
                
                // You can redirect to a 'thank you' page here
                // window.location.href = 'thankyou.html';
            },

            // This function is called when the user closes the popup
            onClose: function() {
                alert('Payment window closed.');
            }
        });
        handler.openIframe(); // This line opens the payment popup
    });
});