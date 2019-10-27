var content = document.querySelector("#hamburger-content");
var sidebarBody = document.querySelector("#hamburger-sidebar-body");

sidebarBody.innerHTML = content.innerHTML;

var button = document.querySelector("#hamburger-button");
var overlay = document.querySelector("#hamburger-overlay");
var activatedClass = "hamburger-activated";

button.addEventListener("click", function(element) {
  element.preventDefault();
  console.log("clicked");
  this.parentNode.classList.add(activatedClass);
});

button.addEventListener("keydown", function(element) {
  if (this.parentNode.classList.contains(activatedClass)) {
    if (element.repeat === false && element.which === 27)
      this.parentNode.classList.remove(activatedClass);
  }
});

overlay.addEventListener("click", function(element) {
  element.preventDefault();

  this.parentNode.classList.remove(activatedClass);
});
