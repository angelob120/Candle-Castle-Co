window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // Show the back-to-top button when scrolled down more than 20 pixels
      backToTopBtn.style.display = "block";
    } else {
      // Hide the back-to-top button when not scrolled enough
      backToTopBtn.style.display = "none";
    }
  }
  
  function scrollToTop() {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      // Use requestAnimationFrame for smooth animation effect
      window.requestAnimationFrame(scrollToTop);
      // Scroll the page to a position progressively closer to the top
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }
  