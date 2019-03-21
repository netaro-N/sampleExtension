const urls =[
  "https://www.nnn.ed.nico/contents/guides/2173/content",
  "https://www.nnn.ed.nico/contents/guides/2174/content",
  "https://www.nnn.ed.nico/contents/guides/2175/content",
  "https://www.nnn.ed.nico/contents/guides/2176/content",
  "https://www.nnn.ed.nico/contents/guides/2177/content",
  "https://www.nnn.ed.nico/contents/guides/2178/content",
  "https://www.nnn.ed.nico/contents/guides/2179/content",
  "https://www.nnn.ed.nico/contents/guides/2180/content",
  "https://www.nnn.ed.nico/contents/guides/2181/content",
]

let escCounter = 0;
document.body.onkeydown = function(event) {
  if (event.keyCode === 27) {
    escCounter += 1;
    if (escCounter >= 2) {
      location.href = urls[Math.floor(Math.random() * urls.length)]; //random() (0 <x =<1)
    } else {
      setTimeout(function() { escCounter =0; }, 500)
    }
  }
}