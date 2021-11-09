var i = 0;
var speed = 100;
var index = "Untitled Coding Tournament";

function indexTitleWriter() {    
    if (i < index.length) {
      document.getElementById("typingEffect").innerHTML += index.charAt(i);
      i++;
      setTimeout(indexTitleWriter, speed);
    }
}