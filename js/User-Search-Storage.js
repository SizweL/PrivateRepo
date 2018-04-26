function UseSearch(){
const button = document.getElementById('UserInput');
button.addEventListener('click', function(e) {
  document.getElementById('counter').innerHTML = "Search for " + button + " Textbook";
})
}