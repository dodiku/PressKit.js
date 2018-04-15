
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

function getLinkButton(){

  // copy to clipboard button
  var buttonClipboard = document.createElement('button');
  buttonClipboard.name='copyToClipboard';
  buttonClipboard.id = 'text_box';
  buttonClipboard.onclick = 'copyToClipboard()';
  var copyIcon = document.createElement('span');
  copyIcon.classList.add('button_icon');
  copyIcon.innerHTML = '⎘';
  buttonClipboard.appendChild(copyIcon);
  buttonClipboard.appendChild(document.createTextNode(" COPY LINK"));

  return buttonClipboard;

}


function appendContent(){

  // run all that when DOM is ready
  document.addEventListener('DOMContentLoaded', function(){

    // checking if projectDetails exists
    if (typeof projectDetails !== 'undefined') {

      // creating a conteiner for the whole shabang
      var conteiner = document.createElement('div');
      conteiner.classList.add('conteiner');
      document.body.append(conteiner);

      // press kit label
      var pressKit = document.createElement('h2');
      pressKit.innerHTML = 'PRESS KIT';
      conteiner.append(pressKit);

      // title section
      if (typeof projectDetails.title !== 'undefined') {
        var title = document.createElement('h1');
        title.innerHTML = projectDetails.title;
        conteiner.append(title);

        document.title = projectDetails.title + ' :: PRESS KIT';
      }

      // subtitle section
      if (typeof projectDetails.subTitle !== 'undefined') {
        var subTitle = document.createElement('div');
        subTitle.innerHTML = projectDetails.subTitle;
        subTitle.classList.add('subtitle');
        conteiner.append(subTitle);
      }


      // link section
      if (typeof projectDetails.link !== 'undefined') {
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

      // creators section
      if (typeof projectDetails.creators !== 'undefined') {

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
            creatorsTextArea.append('\n');
            creatorsTextArea.append('\n');
          }

          if (typeof creatorsArray[i].name !== 'undefined') {
            creatorsTextArea.append('Name: ' + creatorsArray[i].name);
          }

          if (typeof creatorsArray[i].portfolio !== 'undefined') {
            creatorsTextArea.append('\n');
            creatorsTextArea.append('Portfolio: ' + creatorsArray[i].portfolio);
          }

          if (typeof creatorsArray[i].email !== 'undefined') {
            creatorsTextArea.append('\n');
            creatorsTextArea.append('Email: ' + creatorsArray[i].email);
          }

          if (typeof creatorsArray[i].twitter !== 'undefined') {
            creatorsTextArea.append('\n');
            creatorsTextArea.append('Twitter: ' + creatorsArray[i].twitter);
          }

        }

      }

      // about section
      if (typeof projectDetails.about !== 'undefined') {
        var about = document.createElement('div');
        about.classList.add('section');
        about.id = 'about';
        conteiner.append(about);

        var aboutTitle = document.createElement('div');
        aboutTitle.classList.add('section_title');
        var aboutTitleText;
        if (typeof projectDetails.title !== 'undefined'){
          aboutTitleText = '🛋 About ' + projectDetails.title;
        } else {
          aboutTitleText = '🛋 About';
        }
        aboutTitle.innerHTML = aboutTitleText;
        about.append(aboutTitle);

        var aboutButtons = document.createElement('div');
        aboutButtons.classList.add('buttons');
        about.append(aboutButtons);

        aboutButtons.append(getClipboardButton());

        var aboutTextArea = document.createElement('textarea');
        aboutTextArea.readOnly = true;
        aboutTextArea.classList.add('text_box');
        for (var a = 0; a < projectDetails.about.length; a++) {
          if (a > 0) {
            aboutTextArea.append('\n');
            aboutTextArea.append('\n');
          }
          aboutTextArea.append(projectDetails.about[a]);
        }
        about.append(aboutTextArea);
      }

      // videos section
      if (typeof projectDetails.videos !== 'undefined') {
        var videos = document.createElement('div');
        videos.classList.add('section');
        videos.id = 'videos';
        conteiner.append(videos);

        var videosTitle = document.createElement('div');
        videosTitle.classList.add('section_title');
        videosTitle.innerHTML = '📹 Videos';
        videos.append(videosTitle);

        for (var v = 0; v < projectDetails.videos.length; v++) {
          var video = document.createElement('div');
          video.classList.add('video');
          video.id = 'video' + v;
          videos.append(video);

          if (typeof projectDetails.videos[v].videoPage !== 'undefined') {
            var buttons = document.createElement('div');
            buttons.classList.add('buttons');
            video.append(buttons);

            buttons.append(getLinkButton());

            var textArea = document.createElement('textarea');
            textArea.readOnly = true;
            textArea.classList.add('text_box');
            textArea.append(projectDetails.videos[v].videoPage);
            video.append(textArea);
          }

          if (typeof projectDetails.videos[v].embedUrl !== 'undefined') {
            var videoFrame = document.createElement('iframe');
            videoFrame.src = projectDetails.videos[v].embedUrl;
            videoFrame.frameBorder="0";
            videoFrame.width='100%';
            videoFrame.height='270';
            video.append(videoFrame);
          }


        }


      }

    }

    textAreaAdjust();
    setButtonEvents();
  });

}


appendContent();
