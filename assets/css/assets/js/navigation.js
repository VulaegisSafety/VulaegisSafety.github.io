// Toggle mobile menu
function openNav() {
  document.getElementById("slideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}

// Close when clicking outside
document.addEventListener('click', function(event) {
  const slideNav = document.getElementById('slideNav');
  if (!event.target.closest('.slide-nav') && 
      !event.target.closest('.mobile-menu-btn')) {
    slideNav.style.width = "0";
  }
});
