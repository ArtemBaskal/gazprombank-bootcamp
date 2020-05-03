(function() {
  function recursion() {
    const child = document.querySelector(".deepChild");
    //child.style.background = "lightBlue";

    function drawRed(el) {
      el.style.border = "3px solid red";
      el.style.margin = "12px";
      el.style.padding = "12px";
    }
    function drawGreen(el) {
      el.style.border = "3px solid green";
      el.style.margin = "12px";
      el.style.padding = "12px";
    }
    function catchParent(el) {
      drawRed(el);
      const parent = el.parentNode;
      const atr = parent.getAttribute("class");
      if (atr != "sibling first") {
        setTimeout(() => {
          drawRed(parent);
          catchParent(parent);
        }, 300);
    } else {
            const sibling = parent.nextElementSibling;
            catchChild(sibling);          
         };
      }
    catchParent(child);

    function catchChild(el) {
      drawGreen(el);
      const child = el.firstElementChild;
      const atr = child.getAttribute("class");
      if (atr != "deepChild") {
        setTimeout(() => {
          drawGreen(child);
          catchChild(child);
        }, 300);
      }
    }
    catchChild(sibling);
  }

  recursion();
})();
