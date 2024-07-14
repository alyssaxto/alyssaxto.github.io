const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');



// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const portfolioMenu = document.querySelector('#Portfolio-page');
  const aboutMenu = document.querySelector('#about-page');
  const projectsMenu = document.querySelector('#Projects-page');

  const portfolioSection = document.querySelector('#Portfolio');
  const aboutSection = document.querySelector('#about');
  const projectsSection = document.querySelector('#Projects');

  const scrollPos = window.scrollY;

  // Remove 'highlight' class from all menu items
  portfolioMenu.classList.remove('highlight');
  aboutMenu.classList.remove('highlight');
  projectsMenu.classList.remove('highlight');

  // Check if the scroll position matches each section and highlight the corresponding menu item
  if (scrollPos >= projectsSection.offsetTop) {
    projectsMenu.classList.add('highlight');
  } else if (scrollPos >= aboutSection.offsetTop) {
    aboutMenu.classList.add('highlight');
  } else if (scrollPos >= portfolioSection.offsetTop) {
    portfolioMenu.classList.add('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);


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
