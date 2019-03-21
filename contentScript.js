let escCounter = 0;
document.body.onkeydown = function(event) {
  if (event.keyCode === 27) {
    escCounter += 1;
    if (escCounter >= 2) {
      location.href = "https://www.nnn.ed.nico/contents/guides/2175/content";
    } else {
      setTimeout(function() { escCounter =0; }, 500)
    }
  }
}