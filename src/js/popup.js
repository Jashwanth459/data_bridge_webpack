import { handlePostSubmit } from './postRequest'
import { editor } from './texteditor'

var modal = document.getElementById("my_modal");
var btn = document.getElementById("add_new_post");
var span = document.getElementsByClassName("close")[0];
var formPopup = document.getElementById('form_popup')
var postTitle = document.getElementById('post_title')
var postDescription = document.getElementById('post_description')

btn.onclick = function() {
  modal.style.display = "block";
  formPopup.addEventListener('submit', (event) => {
    handlePostSubmit(event)
  })
  let post_title = document.getElementById("post_title");
  post_title.addEventListener('change', handleInputChange)
  var editorClean = document.getElementById('editor');
  postTitle.value = `What's Up`
  editorClean.innerHTML = ''
  window.editor = editor();
  console.log('my_modal come on ', modal)
}

span.onclick = function() {
  modal.style.display = "none";
}

// Hide Popup upon hitting ESC button in the keyboard
window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        modal.style.display = "none";
};
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// handles Input change
export function handleInputChange() {
  let display_error = document.getElementById("title_error");
  display_error.innerText = '';
}
