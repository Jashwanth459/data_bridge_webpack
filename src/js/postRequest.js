let modal = document.getElementById("my_modal");

/**
  * Helps in posting data to the data source with specific format
  * @param {Target Event} e 
  */
 function wrapPostData(e, editorjsdata) {
   return {
    "id": `${window.dataLength+1}`,
    "title": `${e.target[0].value}`,
    // "message": `${e.target[1].value}`,
    "message": `${JSON.stringify(editorjsdata)}`,
    "type": "post",
    "created_time": "2010-08-02T21:27:44+0000",
    "updated_time": "2010-08-02T21:27:44+0000"
   }

 }

/**
 * helps in mamking in post request to the data source
 * @param {Body} body -- Body for posting data to data source
 */
const postForm = body => {
  console.log('body', body)
  return fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }).then((e) => {
    console.log('you are there', e)
    window.open('/', '_self')
  })
};
  
/**
 * Invoked upon clicking submit button in the popup and handles post submition
 * @param {Target Event} e 
 */
export async function handlePostSubmit(e) {
  e.preventDefault();
  let body
  let title_error = document.getElementById("title_error");
  let description_error = document.getElementById("description_error");
  // if(e.target[0].value === '') {
  //   title_error.innerText = 'This field is required';
  //   return;
  // }

  title_error.innerText = '';
    window.editor.save().then((output) => {
      if (output.blocks.length > 0 && e.target[0].value !== '') {
        (async function() {
          modal.style.display = "none"
          console.log('output', output)
          body = JSON.stringify(wrapPostData(e, output))
          console.log('body', body)
          const res = await postForm(body);
        })();
        description_error.innerText = ''
        title_error.innerText = ''
      } else if (output.blocks.length <= 0 && e.target[0].value !== '') {
        description_error.innerText = 'This field is required'
        title_error.innerText = ''
        throw 'Required fields are missing'
      } else if (output.blocks.length > 0 && e.target[0].value == '') {
        description_error.innerText = ''
        title_error.innerText = 'This field is required'
        throw 'Required fields are missing'
      } else {
        description_error.innerText = 'This field is required'
        title_error.innerText = 'This field is required'
        throw 'Required fields are missing'
      }
      
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  console.log('body', body)
 
  window.dataLength = window.dataLength + 1;
}
  
