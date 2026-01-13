document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Functionality ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = mobileNav.querySelectorAll('a');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('is-active');
            mobileNav.classList.remove('is-active');
        });
    });


    // --- Swiper Slider Functionality ---
    // Initialize all swiper containers on the page
    const swipers = document.querySelectorAll('.swiper-container');
    swipers.forEach((swiperElement, index) => {
        const wrapper = swiperElement.closest('.slider-wrapper');
        const nextBtn = wrapper.querySelector('.swiper-button-next');
        const prevBtn = wrapper.querySelector('.swiper-button-prev');

        new Swiper(swiperElement, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            breakpoints: {
                600: { slidesPerView: 2, spaceBetween: 20 },
                900: { slidesPerView: 3, spaceBetween: 40 }
            }
        });
    });

});

// --- Inquiry Modal Functionality ---
const modalOverlay = document.getElementById('inquiry-modal');
const modalItemName = document.getElementById('modal-item-name');
const inquiryForm = document.getElementById('inquiry-form');
const closeModalBtn = document.getElementById('close-modal-btn');
const inquireButtons = document.querySelectorAll('.inquire-btn');

const businessWhatsAppNumber = "23409028359296"; 

const openModal = (itemName) => {
    modalItemName.textContent = itemName;
    modalOverlay.classList.add('is-active');
};

const closeModal = () => {
    modalOverlay.classList.remove('is-active');
};

 
inquireButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-item');
        openModal(itemName);
    });
});

inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const itemName = modalItemName.textContent;
    const customerName = document.getElementById('customer-name').value;
    
    const message = encodeURIComponent(
        `Hi Steppers Sportswear, I'm interested in the ${itemName}. My name is ${customerName}.`
    );
    
    const whatsappURL = `https://wa.me/${23409028359296}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
    
    closeModal();
    inquiryForm.reset();
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});