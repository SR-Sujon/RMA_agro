// Smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // or 'end' or 'center' depending on your preference
      });
    }
  }
  
  // Event listener for smooth scrolling when clicking on navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute('href'); // Get the href attribute value
      smoothScroll(targetId); // Call smoothScroll function with the target ID
    });
  });
  

function showSidebar(){
    const sidebar= document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}


function hideSidebar(){
    const sidebar= document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section-class');
let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEL => {
        if (window.scrollY >= sectionEL.offsetTop) {
            currentSection = sectionEL.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});