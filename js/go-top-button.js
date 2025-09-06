(function () {
  const button = document.createElement("button");
  button.id = "goTopBtn";
  button.setAttribute("aria-label", "Scroll to top");

  // Heroicon: Arrow Up (SVG)
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  `;

  // Tailwind classes for styling
  const baseClasses = [
    "fixed",
    "bottom-6",
    "right-6",
    "z-50",
    "bg-green-800",
    "dark:bg-white",
    "text-white",
    "dark:text-black",
    "border",
    "border-gray-300",
    "dark:border-gray-700",
    "rounded-full",
    "p-3",
    "shadow-md",
    "hover:bg-black",
    "dark:hover:bg-green-700",
    "transition",
    "duration-300",
    "opacity-0",
    "pointer-events-none",
    "transform",
    "translate-y-4",
  ];
  button.classList.add(...baseClasses);

  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(button);
  });

  // Show/hide based on scroll position
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 300;
    button.classList.toggle("opacity-100", show);
    button.classList.toggle("pointer-events-auto", show);
    button.classList.toggle("translate-y-0", show);
    button.classList.toggle("opacity-0", !show);
    button.classList.toggle("pointer-events-none", !show);
    button.classList.toggle("translate-y-4", !show);
  });

  // Smooth scroll to top
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
