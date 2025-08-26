        // --- Navbar Logic ---
        const toggleBtn = document.getElementById('menu-toggle');
        if (toggleBtn) {
            const menu = document.getElementById('navbar-menu');
            const icon = toggleBtn.querySelector('i');
            toggleBtn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            });
            window.addEventListener('scroll', () => {
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        }

        // --- Modal Logic ---
        const bookingModal = document.getElementById('booking-modal');
        const openModalButton = document.getElementById('open-booking-modal-button');
        const closeModalButton = document.getElementById('close-booking-modal-button');
        
        function openModal() {
            bookingModal.classList.remove('hidden');
            document.documentElement.classList.add('modal-open');
        }

        function closeModal() {
            bookingModal.classList.add('hidden');
            document.documentElement.classList.remove('modal-open');
        }

        openModalButton.addEventListener('click', openModal);
        closeModalButton.addEventListener('click', closeModal);
        
        bookingModal.addEventListener('click', (event) => {
            if (event.target === bookingModal) closeModal();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !bookingModal.classList.contains('hidden')) closeModal();
        });

        // --- Form Submission Logic ---
        const form = document.getElementById('booking-form');
        const submitButton = document.getElementById('submit-button');
        const statusMessage = document.getElementById('status-message');
        const thankYouWrapper = document.getElementById('thank-you-wrapper');
        const checkIcon = document.getElementById('check-icon');
        const SITE_KEY = "6LdVjZ8rAAAAAMTpN-pXZT9SoR2JHcmCUFNDwv2W"; // Your reCAPTCHA Site Key
        const FORMSPREE_URL = "https://formspree.io/f/xkgzljjj"; // Your Formspree URL

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            statusMessage.textContent = ''; // Clear previous messages

            // Phone number validation
            const phoneInput = form.querySelector('#phone');
            const phonePattern = /^(09|\+639)\d{9}$/;
            if (!phonePattern.test(phoneInput.value)) {
                statusMessage.innerHTML = '<p class="text-red-600 font-medium">Please enter a valid Philippine phone number.</p>';
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            grecaptcha.ready(function () {
                grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(async function (token) {
                    const formData = new FormData(form);
                    formData.append('g-recaptcha-response', token);

                    try {
                        const response = await fetch(FORMSPREE_URL, {
                            method: "POST",
                            body: formData,
                            headers: { 'Accept': 'application/json' }
                        });

                        if (response.ok) {
                            form.reset();
                            thankYouWrapper.classList.remove('hidden');
                            setTimeout(() => { // Allow the wrapper to be visible before animating
                                checkIcon.classList.remove('opacity-0', 'scale-75');
                                checkIcon.classList.add('opacity-100', 'scale-100');
                            }, 10);

                            setTimeout(() => {
                                closeModal(); // Close the entire modal
                                // Reset the thank you message for next time
                                thankYouWrapper.classList.add('hidden');
                                checkIcon.classList.add('opacity-0', 'scale-75');
                                checkIcon.classList.remove('opacity-100', 'scale-100');
                            }, 4000); // Hide after 4 seconds

                        } else {
                            statusMessage.innerHTML = '<p class="text-red-600 font-medium">Something went wrong. Please try again.</p>';
                        }
                    } catch (error) {
                        statusMessage.innerHTML = '<p class="text-red-600 font-medium">There was an error submitting the form.</p>';
                    } finally {
                        submitButton.disabled = false;
                        submitButton.textContent = 'Request Appointment';
                    }
                });
            });
        });

        // --- Date Picker Logic ---
        const dateInput = document.getElementById('date');
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${year}-${month}-${day}`;