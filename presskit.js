
function copyToClipboard() {
  var childs = document.getElementById(this.parentElement.parentElement.id).childNodes;
  for (var i = 0; i < childs.length; i++) {
    if (childs[i].className == 'text_box') {
      childs[i].select();
      document.execCommand('copy');
    }
  }
}


function setButtonEvents() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", copyToClipboard);
  }
}


function textAreaAdjust() {
  var textareas = document.getElementsByTagName("textarea");
  for (var n = 0; n < textareas.length; n++) {
    textareas[n].style.height = "1px";
    textareas[n].style.height = (0+textareas[n].scrollHeight)+"px";
  }
}

textAreaAdjust();
setButtonEvents();
