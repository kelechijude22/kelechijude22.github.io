document.addEventListener('DOMContentLoaded', () => {

    // --- Our "Mini-Database" of Flights ---
    // In a real application, this data would come from a backend API.
    const availableFlights = [
        { from: 'nigeria', to: 'germany', price: 1200, airline: 'Lufthansa' },
        { from: 'new york', to: 'london', price: 750, airline: 'British Airways' },
        { from: 'tokyo', to: 'sydney', price: 1100, airline: 'Qantas' },
        { from: 'dubai', to: 'paris', price: 850, airline: 'Emirates' }
        // Add more flights here to make the search more useful
    ];

    // --- Search Form Handling ---
    const searchForm = document.getElementById('search-form');
    const searchResultsSection = document.getElementById('search-results');
    const resultsContainer = document.getElementById('results-container');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from reloading the page

        // Get user input and convert to lowercase for easier matching
        const fromInput = document.getElementById('from').value.toLowerCase().trim();
        const toInput = document.getElementById('to').value.toLowerCase().trim();

        // Find a flight that matches the user's search
        const foundFlight = availableFlights.find(flight => flight.from === fromInput && flight.to === toInput);

        // Clear previous results and show the results section
        resultsContainer.innerHTML = '';
        searchResultsSection.style.display = 'block';

        if (foundFlight) {
            // If a flight is found, create the HTML to display it
            const flightCardHTML = `
                <div class="deal-card">
                    <h3>${foundFlight.airline} Flight</h3>
                    <p>From: <strong>${capitalize(fromInput)}</strong> To: <strong>${capitalize(toInput)}</strong></p>
                    <div class="price">$${foundFlight.price}</div>
                    <button class="btn book-btn" data-destination="${capitalize(fromInput)} to ${capitalize(toInput)}" data-price="${foundFlight.price}">
                        Book Now
                    </button>
                </div>
            `;
            resultsContainer.innerHTML = flightCardHTML;
        } else {
            // If no flight is found, display a message
            resultsContainer.innerHTML = '<p>Sorry, no direct flights found for this route. Please check our featured deals below.</p>';
        }

        // Re-attach event listeners to any new "Book Now" buttons that were created
        attachBookButtonListeners();
    });
    
    // --- Function to attach event listeners to "Book Now" buttons ---
    function attachBookButtonListeners() {
        const allBookButtons = document.querySelectorAll('.book-btn');
        allBookButtons.forEach(button => {
            // To prevent adding the same listener multiple times, we'll check if it has one already
            if (!button.hasAttribute('data-listener-attached')) {
                button.addEventListener('click', () => {
                    const destination = button.getAttribute('data-destination');
                    const price = button.getAttribute('data-price');
                    
                    // Store details and redirect to booking page
                    localStorage.setItem('selectedFlightDestination', destination);
                    localStorage.setItem('selectedFlightPrice', price);
                    
                    window.location.href = 'booking.html';
                });
                button.setAttribute('data-listener-attached', 'true');
            }
        });
    }

    // A small helper function to capitalize city names for display
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Initial attachment for the featured deals that are already on the page
    attachBookButtonListeners();
});