// MToebler and CSE 471 Team 4. Week 7 Storyboard slider
document.addEventListener(
   'DOMContentLoaded',
   () => {
      var current_img = null;
      var num = 0;
      var max = 11;

      current_img = document.querySelector("#curr_img");

      document.querySelector("header>div")
         .textContent = "SB_" + num;
      
      updateTitle = () => document.querySelector("header>div")
      .textContent = "SB_" + num;
   
      document.querySelector('#next')
         .addEventListener(
            'click',
            () => {
               num++;
               num > max ? num = 0 : num = num;
               current_img.src = "./" + "SB_" + num + ".png";
               updateTitle();
            },
            false
      );
      
      document.querySelector('#prev')
         .addEventListener(
            'click',
            () => {
               num--;
               num < 0 ? num = max : num = num;
               current_img.src = "./" + "SB_" + num + ".png";
               updateTitle();
            },
            false
      );
      
   }
)