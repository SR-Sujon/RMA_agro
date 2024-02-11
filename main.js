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