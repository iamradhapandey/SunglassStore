var btn = document.querySelector("#nav1 i")
var overlay = document.querySelector(".overlay")
var cross = document.querySelector('.nav i')

btn.addEventListener("click", function() {
  overlay.style.right = "0" + "%"
})

cross.addEventListener("click", function() {
   overlay.style.right = "-100" + "%"
   console.log("HELO")
})