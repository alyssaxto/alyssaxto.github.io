

document.querySelectorAll('.bullet-image img').forEach(item => {
  item.addEventListener('click', event => {
    const src = event.target.getAttribute('src');
    const expandedImage = document.createElement('div');
    expandedImage.classList.add('expanded-image');
    expandedImage.innerHTML = `<img src="${src}" alt="Expanded Image">`;
    document.body.appendChild(expandedImage);

    // Trigger smooth transition by adding active class after a short delay
    setTimeout(() => {
      expandedImage.classList.add('active');
    }, 50);

    // Close the expanded image when clicked on it
    expandedImage.addEventListener('click', () => {
      expandedImage.classList.remove('active');
      // Delay the removal of the expanded image to allow the transition to complete
      setTimeout(() => {
        expandedImage.remove();
      }, 300); // Should match the duration of CSS transition
    });
  });
});

// Get the modal element
var modal = document.getElementById('galleryModal');

// Get the image element inside the modal
var modalImg = document.getElementById('modalImage');

// Get all gallery items
var galleryItems = document.querySelectorAll('.Gallery__item');

// Get the close button element
var closeBtn = document.getElementsByClassName('close')[0];

// Loop through each gallery item
galleryItems.forEach(function(item) {
  // Add click event listener to each gallery item
  item.addEventListener('click', function() {
    // Display the modal
    modal.style.display = 'block';
    // Set the clicked image as the modal content
    modalImg.src = this.querySelector('img').src;
  });
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// Close the modal when user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const scrollContent = document.querySelector('.scroll-content');
  const scrollText = document.querySelector('.search-text');
  
  // Adjust the factor for faster horizontal scrolling
  const scrollFactor = 4.5; // Increase this value for faster scroll

  // Set the horizontal scroll position based on vertical scroll
  scrollContent.style.transform = `translateX(${scrollPosition * scrollFactor}px)`;
  scrollText.style.transform = `translateX(${scrollPosition * scrollFactor}px)`;
});

// Navbar Mobile Menu Toggle (navbar.js)
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu');
  const navbarMenu = document.querySelector('.navbar__menu');

  mobileMenuButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".about__content").classList.add("show");
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".about__content").classList.add("show");
});
