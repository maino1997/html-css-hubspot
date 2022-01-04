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

//   const features = document.getElementById("dropdownMenuButton");
//   const featMenu = document.getElementById("features-menu");

//   features.addEventListener("click" , function(){
//    featMenu.style.transform = "none";
//    featMenu.style = "position:absolute; left:0px; top:0px right:0px bottom: 0px;";
//   });


const btnFeat = document.getElementById("btn-features");
const dropdown = document.getElementById("menu-features");
const backFeat = document.getElementById("back-features");
const tools = document.getElementById("btn-tools");
const toolsMenu = document.getElementById("menu-tools")
const company = document.getElementById("btn-company");
const companyMenu = document.getElementById("menu-company");
const custumer = document.getElementById("btn-custumers");
const custumerMenu = document.getElementById("menu-custumer")


btnFeat.addEventListener("click" , function (){
    dropdown.style = "background-clip: border-box";
    
}
);

btnFeat.addEventListener("click" , function (){
    dropdown.style.display = "block";
}
);

backFeat.addEventListener("click" , function(){
   dropdown.style.display = "none";
});





tools.addEventListener("click" , function (){
    toolsMenu.style.display = "block";    
}
);



tools.addEventListener("click" , function (){
    toolsMenu.style.display = "block";    
}
);


company.addEventListener("click" , function (){
    companyMenu.style.display = "block";    
}
);


custumer.addEventListener("click" , function (){
    custumerMenu.style.display = "block";    
}
);


