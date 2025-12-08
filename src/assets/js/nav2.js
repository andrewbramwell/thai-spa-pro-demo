// Astro:page-load wrapper for View Transitions purposes
document.addEventListener('astro:page-load', () => {
    
    // add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#mobile-menu-toggle");
    
    console.log("CSbody:", CSbody);
    console.log("CSnavbarMenu:", CSnavbarMenu);
    console.log("CShamburgerMenu:", CShamburgerMenu);
    
    if (!CShamburgerMenu) {
        console.error("Mobile menu toggle button not found!");
        return;
    }
    
    CShamburgerMenu.addEventListener('click', function(e) {
        console.log("Menu clicked!");
        console.log("Before toggle - body classes:", CSbody.className);
        console.log("Before toggle - nav classes:", CSnavbarMenu.className);
        
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        
        console.log("After toggle - body classes:", CSbody.className);
        console.log("After toggle - nav classes:", CSnavbarMenu.className);
        
        // run the function to check the aria-expanded value
        ariaExpanded();
    });
    
    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded-ul');
        const csExpanded = csUL.getAttribute('aria-expanded');
        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }
    
    // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll 
    // animations with the navbar
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
            document.querySelector('body').classList.add('scroll')
        } else {
            document.querySelector('body').classList.remove('scroll')
        }
    });
    
    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
    }
    
});