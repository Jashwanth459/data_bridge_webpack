import { handleSubmitPost } from './handlePost';
import { handlePostSubmit } from './postRequest'
import { editor } from './texteditor'

let modal = document.getElementById("my_modal");
let btn = document.getElementById("add_new_post");
let span = document.getElementsByClassName("close")[0];
let formPopup = document.getElementById('form_popup')
let postTitle = document.getElementById('post_title')
let postDescription = document.getElementById('post_description')
let editButton = document.getElementById('edit_button')

/**
 * Handling error message in the form
 */
const resetErrorMessages = () => {
  let title_error = document.getElementById("title_error");
  let description_error = document.getElementById("description_error");
  title_error.innerText = ''
  description_error.innerText = ''
}

// editButton.onclick = function() {
//   formPopup.addEventListener('submit', (event) => {
//     handleSubmitPost(event)
//   })
// }
btn.onclick = function() {
  modal.style.display = "block";
  formPopup.addEventListener('submit', (event) => {
    handlePostSubmit(event)
  })
  resetErrorMessages()
  let post_title = document.getElementById("post_title");
  post_title.addEventListener('change', handleInputChange)
  let editorClean = document.getElementById('editor');
  postTitle.value = `What's Up`
  editorClean.innerHTML = ''
  window.editor = editor();
}

span.onclick = function() {
  modal.style.display = "none";
  window.open('/', '_self')
}

// Hide Popup upon hitting ESC button in the keyboard
window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        modal.style.display = "none";
        window.open('/', '_self')
};
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.open('/', '_self')
  }
}

// handles Input change
export function handleInputChange() {
  let display_error = document.getElementById("title_error");
  display_error.innerText = '';
}
