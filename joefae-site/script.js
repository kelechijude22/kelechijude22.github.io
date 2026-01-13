document.addEventListener("DOMContentLoaded", () => {

  // ---  Hamburger Menu Functionality ---
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = mobileNav.querySelectorAll("a");

  // Toggle the mobile menu on hamburger click
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
  });

  // Close the mobile menu when a navigation link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("is-active");
      mobileNav.classList.remove("is-active");
    });
  });


  // ---  Swiper Slider Functionality ---
  const swipers = document.querySelectorAll(".swiper-container");
  swipers.forEach((swiperElement) => {
    const wrapper = swiperElement.closest(".slider-wrapper");
    const nextBtn = wrapper.querySelector(".swiper-button-next");
    const prevBtn = wrapper.querySelector(".swiper-button-prev");

    new Swiper(swiperElement, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      // Responsive settings for different screen sizes
      breakpoints: {
        600: { slidesPerView: 2, spaceBetween: 20 },
        900: { slidesPerView: 3, spaceBetween: 40 },
      },
    });
  });


  // ---  Inquiry Modal Functionality ---
  const modalOverlay = document.getElementById("inquiry-modal");
  const modalItemName = document.getElementById("modal-item-name");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const inquireButtons = document.querySelectorAll(".inquire-btn");
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const emailBtn = document.getElementById("email-btn");
  const customerNameInput = document.getElementById("customer-name");
  const customerEmailInput = document.getElementById("customer-email");

  // --- Contact Details ---
  const businessWhatsAppNumber = "23409168734419";
  const businessEmail = "joefaestores@gmail.com"; 

  // Helper function to open the modal
  const openModal = (itemName) => {
    modalItemName.textContent = itemName;
    modalOverlay.classList.add("is-active");
  };

  // Helper function to close the modal and reset the form
  const closeModal = () => {
    modalOverlay.classList.remove("is-active");
    customerNameInput.value = "";
    customerEmailInput.value = "";
  };

  // Add event listener to all "Inquire Now" buttons to open the modal
  inquireButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemName = button.getAttribute("data-item");
      openModal(itemName);
    });
  });

  // Logic for the "Chat on WhatsApp" button
  whatsappBtn.addEventListener("click", () => {
    const itemName = modalItemName.textContent;
    const customerName = customerNameInput.value;

    if (!customerName) {
      alert("Please enter your name.");
      return; // Stop the function if name is missing
    }

    const message = encodeURIComponent(
      `Hi Jofae, I'm interested in the ${itemName}. My name is ${customerName}.`
    );
    const whatsappURL = `https://wa.me/${23409168734419}?text=${message}`;
    window.open(whatsappURL, "_blank");
    closeModal();
  });

  // Logic for the "Send via Email" button
  emailBtn.addEventListener("click", () => {
    const itemName = modalItemName.textContent;
    const customerName = customerNameInput.value;
    const customerEmail = customerEmailInput.value;

    if (!customerName || !customerEmail) {
      alert("Please enter both your name and email for this option.");
      return; 
    }

    const subject = encodeURIComponent(`Inquiry about: ${itemName}`);
    const body = encodeURIComponent(
      `Hi Jofae,\n\nI am interested in the following item: ${itemName}.\n\nMy name is ${customerName}.\n\nPlease get back to me at this email address.\n\nThank you!`
    );

    // Create the mailto link to open the user's email client
    const mailtoLink = `mailto:${'joefaestores@gmail.com'}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    closeModal();
  });

  // Event listeners for closing the modal
  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

}); 


