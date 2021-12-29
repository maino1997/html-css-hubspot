window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos > 20) {
      // I am using 'display' instead of 'top':
      document.getElementById("nav-scroll").style.display = "none";
    } else {
      document.getElementById("nav-scroll").style.display = "initial";
    }
  }