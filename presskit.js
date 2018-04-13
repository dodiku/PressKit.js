
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
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', copyToClipboard);
  }
}


function textAreaAdjust() {
  var textareas = document.getElementsByTagName('textarea');
  for (var n = 0; n < textareas.length; n++) {
    textareas[n].style.height = '1px';
    textareas[n].style.height = (0+textareas[n].scrollHeight)+'px';
  }
}


function getClipboardButton(){

  // copy to clipboard button
  var buttonClipboard = document.createElement('button');
  buttonClipboard.name='copyToClipboard';
  buttonClipboard.id = 'text_box';
  buttonClipboard.onclick = 'copyToClipboard()';
  var copyIcon = document.createElement('span');
  copyIcon.classList.add('button_icon');
  copyIcon.innerHTML = '⎘';
  buttonClipboard.appendChild(copyIcon);
  buttonClipboard.appendChild(document.createTextNode(" COPY TO CLIPBOARD"));

  return buttonClipboard;

}


function appendContent(){

  // run all that when DOM is ready
  document.addEventListener('DOMContentLoaded', function(){

    // checking if projectDetails exists
    if (typeof projectDetails !== undefined) {

      // creating a conteiner for the whole shabang
      var conteiner = document.createElement('div');
      conteiner.classList.add('conteiner');
      document.body.append(conteiner);

      // press kit label
      var pressKit = document.createElement('h2');
      pressKit.innerHTML = 'PRESS KIT';
      conteiner.append(pressKit);

      // project title section

      // project title section
      if (typeof projectDetails.title !== undefined) {
        var title = document.createElement('h1');
        title.innerHTML = projectDetails.title;
        conteiner.append(title);

        document.title = projectDetails.title + ' :: PRESS KIT';
      }

      // project subtitle section
      if (typeof projectDetails.subTitle !== undefined) {
        var subTitle = document.createElement('div');
        subTitle.innerHTML = projectDetails.subTitle;
        subTitle.classList.add('subtitle');
        conteiner.append(subTitle);
      }


      // project link section
      if (typeof projectDetails.link !== undefined) {
          var link = document.createElement('div');
          link.classList.add('section');
          link.id = 'link';
          conteiner.append(link);

          var linkTitle = document.createElement('div');
          linkTitle.classList.add('section_title');
          linkTitle.innerHTML = '🖥 Link to project';
          link.append(linkTitle);

          var linkButtons = document.createElement('div');
          linkButtons.classList.add('buttons');
          link.append(linkButtons);

          linkButtons.append(getClipboardButton());

          var linkTextArea = document.createElement('textarea');
          linkTextArea.readOnly = true;
          linkTextArea.classList.add('text_box');
          linkTextArea.append(projectDetails.link);
          link.append(linkTextArea);
      }

      // project creators section
      if (typeof projectDetails.creators !== undefined) {

        var creators = document.createElement('div');
        creators.classList.add('section');
        creators.id = 'creators';
        conteiner.append(creators);

        var creatorsTitle = document.createElement('div');
        creatorsTitle.classList.add('section_title');
        creatorsTitle.innerHTML = '👩‍💻 Creators';
        creators.append(creatorsTitle);

        var creatorsButtons = document.createElement('div');
        creatorsButtons.classList.add('buttons');
        creators.append(creatorsButtons);

        creatorsButtons.append(getClipboardButton());

        var creatorsTextArea = document.createElement('textarea');
        creatorsTextArea.readOnly = true;
        creatorsTextArea.classList.add('text_box');
        creators.append(creatorsTextArea);

        var creatorsArray = projectDetails.creators;
        for (var i = 0; i < creatorsArray.length; i++) {

          if (i > 0) {
            console.log(i);
            creatorsTextArea.append('\n');
            creatorsTextArea.append('\n');
          }

          if (typeof creatorsArray[i].name !== undefined) {
            creatorsTextArea.append('Name: ' + creatorsArray[i].name);
          }

          if (typeof creatorsArray[i].portfolio !== undefined) {
            creatorsTextArea.append('\n');
            creatorsTextArea.append('Portfolio: ' + creatorsArray[i].portfolio);
          }

          if (typeof creatorsArray[i].email !== undefined) {
            creatorsTextArea.append('\n');
            creatorsTextArea.append('Email: ' + creatorsArray[i].email);
          }

          if (typeof creatorsArray[i].twitter !== undefined) {
            creatorsTextArea.append('\n');
            creatorsTextArea.append('Twitter: ' + creatorsArray[i].twitter);
          }

        }

      }

    }

    textAreaAdjust();
    setButtonEvents();
  });

}


appendContent();
