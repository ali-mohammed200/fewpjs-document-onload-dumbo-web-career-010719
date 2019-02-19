// Your code  goes here

// document.addEventListener("DOMContentLoaded", domLoaded, false);
//
// function domLoaded(event) {
//   alert("The DOM has loaded");
// }

function updateDOM() {
  document.getElementById("text").innerHTML = "This is really cool!";
}

function domContentLoaded() {
  document.addEventListener("DOMContentLoaded", function(event) {
    updateDOM()
  });
}
