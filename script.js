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



//  DELETE USELESS PROPERTIES 

  const features = document.getElementById("dropdownMenuButton");
  const featMenu = document.getElementById("features-menu");

  features.addEventListener("click" , function(){
   featMenu.style.transform = "none";
   featMenu.style = "position:absolute; left:0px; top:0px right:0px bottom: 0px;";
  });