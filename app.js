var boxes = document.getElementById("boxes").children;
var clicked = 0;
function toggle() {
  if (clicked === 0) {
    boxes[0].style.visibility = "hidden";
    clicked++;
  } else if (clicked === 1) {
    clicked++;
    boxes[0].style.visibility = "visible";
    boxes[1].style.visibility = "hidden";
  } else if (clicked === 2) {
    clicked++;
    boxes[1].style.visibility = "visible";
    boxes[2].style.visibility = "hidden";
  } else if (clicked === 3) {
    boxes[2].style.visibility = "visible";
    clicked = 0;
  }
  // console.log(clicked);
}

function goBack() {
  window.history.back();
  console.log("ажиллалаа");
}
