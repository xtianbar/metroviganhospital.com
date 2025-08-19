  // --- Select Elements ---
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('navbar-menu');
  const icon = toggleBtn.querySelector('i');

  // --- Click Event to Toggle Menu ---
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  // --- NEW: Scroll Event to Close Menu ---
  window.addEventListener('scroll', () => {
    // Check if the menu is currently open (!hidden)
    const isMenuOpen = !menu.classList.contains('hidden');

    if (isMenuOpen) {
      // Close the menu
      menu.classList.add('hidden');
      // Reset the icon back to the hamburger
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

// --- Get Modal Elements ---
        const bookingModal = document.getElementById('booking-modal');
        const openModalButton = document.getElementById('open-booking-modal-button');
        const closeModalButton = document.getElementById('close-booking-modal-button');
        
        // --- Modal Open/Close Functions ---
        function openModal() {
            bookingModal.classList.remove('hidden');
            document.documentElement.classList.add('modal-open');
        }

        function closeModal() {
            bookingModal.classList.add('hidden');
            document.documentElement.classList.remove('modal-open');
        }

        // --- Event Listeners for Modal ---
        openModalButton.addEventListener('click', openModal);
        closeModalButton.addEventListener('click', closeModal);
        
        // Close modal by clicking background
        bookingModal.addEventListener('click', (event) => {
            if (event.target === bookingModal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !bookingModal.classList.contains('hidden')) {
                closeModal();
            }
        });

        // --- Form Submission Logic ---
        const form = document.getElementById('booking-form');
        const submitButton = document.getElementById('submit-button');
        const statusMessage = document.getElementById('status-message');

        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            submitButton.disabled = true;
            submitButton.textContent = 'Sending Request...';
            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    statusMessage.innerHTML = '<p class="text-green-600 font-medium">Thank you! Your request has been sent.</p>';
                    form.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        statusMessage.innerHTML = `<p class="text-red-600 font-medium">${data["errors"].map(error => error["message"]).join(", ")}</p>`;
                    } else {
                        statusMessage.innerHTML = '<p class="text-red-600 font-medium">Oops! There was a problem. Please try again.</p>';
                    }
                }
            } catch (error) {
                statusMessage.innerHTML = '<p class="text-red-600 font-medium">A network error occurred. Please try again.</p>';
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Request Appointment';
            }
        });

        // --- Date Picker Logic ---
        const dateInput = document.getElementById('date');
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${year}-${month}-${day}`;