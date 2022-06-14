function toggleMenu(){
    let menuBtn = document.getElementById("menu-btn");
    let navLinks = document.getElementById("nav-links");
    
    let background = document.getElementById("home");
    
    if(menuBtn.classList.contains("menu-btn-open")){
      menuBtn.classList.remove("menu-btn-open");
      navLinks.classList.remove("nav-links-open");
      
      background.classList.remove("background");

      
    } else {
      menuBtn.classList.add("menu-btn-open");
      navLinks.classList.add("nav-links-open");
      

      background.classList.add("background");
    }
  }

  
  
  let acc = document.querySelectorAll(".accordion");

  acc.forEach(item => 
   item.addEventListener('click', function () {
    item.classList.toggle("active");
  
      let panel = item.nextElementSibling;
  
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          console.log(panel.scrollHeight)
      }
  }))