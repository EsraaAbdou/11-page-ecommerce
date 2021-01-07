const openBtn = document.getElementsByClassName("expand_icon")[0];
const closeBtn = document.getElementById("close-menu");
const menu = document.querySelector("nav ul");
openBtn.addEventListener("click", function(){
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  menu.style.display = "block";
});
closeBtn.addEventListener("click", function(){
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  menu.style.display = "none";
});