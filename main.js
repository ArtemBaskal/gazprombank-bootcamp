(function() {
  function recursion() {
    document.querySelector(".wrapper").style.textAlign = "center";

    const child = document.querySelector(".deepChild");

    child.style.background = "lightBlue";

    function paintBorder(el) {
      el.style.border = "3px double purple";
      el.style.margin = "12px";
      el.style.padding = "12px";
    }

    function catchParent(el) {
      paintBorder(el);
      const parent = el.parentNode;
      const atr = parent.getAttribute("class");
      if (!atr) {
        setTimeout(() => {
          paintBorder(parent);
          catchParent(parent);
          document.querySelector(".blockName").innerHTML = parent.tagName;
        }, 200);
      }
    }
    catchParent(child);
  }

  recursion();
})();
