document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content > div');
  
    function activateTab(tabId) {
      tabs.forEach(tab => tab.classList.remove('active'));
      contents.forEach(content => content.style.display = 'none');
  
      document.getElementById(tabId).style.display = 'flex';
      document.querySelector(`#${tabId.replace('content', 'tab')}`).classList.add('active');
    }
  
    // Set the default active tab
    activateTab('content1');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const contentId = `content${tab.id.replace('tab', '')}`;
        activateTab(contentId);
      });
    });
  });

  // ------------- accordion ---------------------------//

  var acc = document.getElementsByClassName("accordion");
  
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
  
      var panel = this.nextElementSibling;
      var img = this.querySelector("img");
  
      if (this.classList.contains("active")) {
        
        img.style.transform = "rotate(180deg)";
        img.style.filter =
          "invert(43%) sepia(86%) saturate(5148%) hue-rotate(348deg) brightness(95%) contrast(98%)"; // Example color transformation to match #fd441f
      } else {

        img.style.transform = "rotate(0deg)";
        img.style.filter = "none"; // Reset to original color
      }
  
      if (panel.style.display === "flex") {
        panel.style.display = "none";
        
      } else {
        panel.style.display = "flex";
        panel.style.transition = "all linear 0.35s";
      }
    });
  }
  