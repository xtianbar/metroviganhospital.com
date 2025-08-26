// --- Select Elements ---
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('navbar-menu');
const icon = toggleBtn.querySelector('i');

// --- Define Global Variables ---
let scrollPositionOnOpen; // This will store where the user was when they opened the menu.
const scrollThreshold = 150; // Pixels to scroll AFTER opening before menu closes. Adjust as needed.

// --- Click Event to Toggle Menu ---
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');

  // Check if the menu was just opened
  const isMenuOpen = !menu.classList.contains('hidden');

  // If the menu is now open, record the current scroll position.
  if (isMenuOpen) {
    scrollPositionOnOpen = window.scrollY;
  }
});

// --- Scroll Event to Close Menu (Relative Check) ---
window.addEventListener('scroll', () => {
  // Check if the menu is currently open
  const isMenuOpen = !menu.classList.contains('hidden');

  // UPDATED CONDITION:
  // Checks if you've scrolled past the threshold FROM THE POINT you opened the menu.
  if (isMenuOpen && window.scrollY > scrollPositionOnOpen + scrollThreshold) {
    // Close the menu
    menu.classList.add('hidden');
    // Reset the icon back to the hamburger
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

//contact-us form script
const form = document.getElementById('contact-form');
  const thankYouWrapper = document.getElementById('thank-you-wrapper');
  const checkIcon = document.getElementById('check-icon');
  const SITE_KEY = "6LdVjZ8rAAAAAMTpN-pXZT9SoR2JHcmCUFNDwv2W";

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const phoneInput = form.querySelector('#phone');
    const phonePattern = /^(09|\+639)\d{9}$/;
    if (!phonePattern.test(phoneInput.value)) {
      alert("Please enter a valid Philippine phone number (starts with 09 or +639).");
      return;
    }

   // Execute reCAPTCHA v3
   grecaptcha.ready(function () {
      grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(async function (token) {
        const formData = new FormData(form);
        formData.append('g-recaptcha-response', token); // Append token for Formspree

        try {
          const response = await fetch("https://formspree.io/f/xnnzoyqq", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            form.reset();

            // Show thank you + animate checkmark
            thankYouWrapper.classList.remove('hidden');
            checkIcon.classList.remove('opacity-0', 'scale-75');
            checkIcon.classList.add('opacity-100', 'scale-100');

            setTimeout(() => {
              checkIcon.classList.add('opacity-0', 'scale-75');
              checkIcon.classList.remove('opacity-100', 'scale-100');
              thankYouWrapper.classList.add('hidden');
            }, 5000);
          } else {
            alert("Something went wrong. Please try again later.");
          }
        } catch (error) {
          alert("There was an error submitting the form.");
        }
      });
    });
  });