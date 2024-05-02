/* document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".loader").classList.add("hidden");
    document.querySelector("header").classList.remove("hidden");
    document.querySelector(".Projet").classList.remove("hidden");
  }, 7000); // 7 secondes
});
 */

function windowTab(url) {
  window.open(url, '_blank');
}


document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var responseContainer = document.getElementById("response");
});
