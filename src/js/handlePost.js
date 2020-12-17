import { editor } from './texteditor'

/**
 *  handles Delete post functionality
 * @param {event} e - target event of delete button of the post
 */
export function handleDeletePost(e) {
    // Asks user to confirm the delete post choice, if no -- does nothing
    if(e.target.id && confirm('Do you really want to delete the post..?')) {
        fetch(`http://localhost:3000/data/${e.target.id}`, {
            method: 'DELETE',
        }).then(response => { 
            window.open('/', '_self'); 
            return response.json();
        })
    }
}

/**
 * Handles submit button in the popup
 * @param {event} e - target event of submit button
 */
export async function handleSubmitPost (e, editorRef) {
    e.preventDefault();
    let postTitle = document.getElementById('post_title')
    postTitle.onchange = () => {
        titleError.innerText = ''
    }
    let titleError = document.getElementById("title_error");
    titleError.innerText = ''
    let descriptionError = document.getElementById('description_error')
    descriptionError.innerText = ''
    editorRef.save().then((output) => {
        if (output.blocks.length > 0 && postTitle.value !== '') {
            if (e.target.id && confirm('Do you really want to update the post..?')) { 
                descriptionError.innerText = '';
                fetch(`http://localhost:3000/data/${e.target.id}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: postTitle.value,
                        message: JSON.stringify(output)
                    })
                }).then( () => {
                window.open('/', '_self');   
                })
                console.log('hey output', output, e)
            } else {
                return;
            }
        } else if (output.blocks.length <= 0 && postTitle.value !== '') {
            descriptionError.innerText = 'This field is required'
            titleError.innerText = ''
            return
        } else if (output.blocks.length > 0 && postTitle.value === '') {
            descriptionError.innerText = ''
            titleError.innerText = 'This field is required'
            return
        } else {
            descriptionError.innerText = 'This field is required'
            titleError.innerText = 'This field is required'
            return
        }
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
    // console.log('body', body)
}

/**
 *  handles Edit post functionality
 * @param {event} e - target event of edit button of the post
 */
export function handleEditPost(e) {
    let formModel = document.getElementById('my_modal')
    formModel.style.display = 'unset';
    let inputTitle = document.getElementById(`post_title_${e.target.id}`)

    let postTitle = document.getElementById('post_title')
    let formPopup = document.getElementById('form_popup')

    fetch(`http://localhost:3000/data/${e.target.id}`, {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        postTitle.value = inputTitle.innerText
        let cleanEditor = document.getElementById('editor');
        cleanEditor.innerHTML = ''
        const editorRef = editor(JSON.parse(res && res.message))
        formPopup.onsubmit = () => {
            handleSubmitPost(e, editorRef);
            return false;
        }
    })
    .catch(function (error) {
        console.log('hey you ended up with error:  ', error);
    })
}

