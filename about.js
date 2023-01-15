 window.onscroll = function() {myFunction1()};

function myFunction1() {
  if (document.documentElement.scrollTop > 1000) {
      myatminbox.style.display  = "flex"
  }
  if (document.documentElement.scrollTop > 1500) {
      arkerbox.style.display = "flex"
  }
  if (document.documentElement.scrollTop > 2000) {
      minthiakbox.style.display = "flex"
  }
  if (document.documentElement.scrollTop > 2500) {
      zayarbox.style.display = "flex"
  }
}
