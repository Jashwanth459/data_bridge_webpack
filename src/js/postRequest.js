import edjsHTML from "editorjs-html";
import { editor } from "./texteditor"
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
  editor().save().then((output) => {
    async function IIFE() {
      console.log('output', output)
      body = JSON.stringify(wrapPostData(e, output))
      console.log('body', body)
      const res = await postForm(body);
    }
    console.log('data', output)
    IIFE();
    // const edjsParser = edjsHTML();
    // const html = edjsParser.parse(output);
    // var cont = document.getElementById('post_container')
    // console.log('html', html)
    // cont.innerHTML = html
    // alert('Data: ', output);
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
  console.log('body', body)
 
  // const data = await res.json();
  window.dataLength = window.dataLength + 1;
}
  
