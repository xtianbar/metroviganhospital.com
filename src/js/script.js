let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 200) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#6b7280 ${scrollValue}%, #212121 ${scrollValue}%)`;
  };    
    
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;


    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
  
    toggleBtn.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => menu.classList.add('show-menu'), 10); // Trigger animation
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        menu.classList.remove('show-menu');
        setTimeout(() => menu.classList.add('hidden'), 300); // Wait for animation to end
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });