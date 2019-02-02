const dragElement = document.querySelector(".dragElement");

dragElement.addEventListener("mousedown", e => {
  let coords = getCoords(dragElement);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  dragElement.style.position = "absolute";

  moveAt(e);

  function moveAt(e) {
    dragElement.style.left = e.pageX - shiftX + "px";
    dragElement.style.top = e.pageY - shiftY + "px";
  }

  const eventMoveAt = function(e) {
    return moveAt(e);
  };

  document.addEventListener("mousemove", eventMoveAt);

  dragElement.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", eventMoveAt);
    dragElement.removeEventListener("mouseup", eventMoveAt);
  });


});

dragElement.addEventListener("dragstart", () => false);

function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
