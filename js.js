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
