document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.getElementById('image-container');
  
    window.addEventListener('scroll', function() {
      if (isInViewport(imageContainer)) {
        imageContainer.classList.add('show');
      }
    });
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });

  class MobileNavbar {
    constructor(mobileMenu, navlist, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navlist);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
    
      this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
      this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`);
      });
    }
    
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
    
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    init() {
      if (this.mobileMenu) {
      this.addClickEvent();
      }
      return this;
    }
    }
    
    const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    );
    mobileNavbar.init();
  
