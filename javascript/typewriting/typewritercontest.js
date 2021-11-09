var i = 0;
var speed = 100;
var index = "Contest";

function indexTitleWriter() {    
    if (i < index.length) {
      document.getElementById("typingEffect").innerHTML += index.charAt(i);
      i++;
      setTimeout(indexTitleWriter, speed);
    }
}