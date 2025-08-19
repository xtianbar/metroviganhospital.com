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