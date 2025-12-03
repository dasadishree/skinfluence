// hamburger menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const sideMenu = document.getElementById('side-menu');

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

//smooth scroll
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // close menu
            hamburgerMenu.classList.remove('active');
            sideMenu.classList.remove('active');
            
            //smooth scroll
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// close menu
document.addEventListener('click', function(e) {
    if (!sideMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        hamburgerMenu.classList.remove('active');
        sideMenu.classList.remove('active');
    }
});

