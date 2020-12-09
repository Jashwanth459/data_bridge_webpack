import './js/init.js'
import './js/carousel.js'
import './js/handlePost.js'
import './js/pagination.js'
import './js/popup.js'
import { editor } from './js/texteditor.js'
import './js/postRequest.js'

import './css/style.css'
import './css/container.css'
import './css/header.css'
import './css/index.css'
import './css/pagination.css'
import './css/popup.css'
import './css/skeleton.css'
import './css/spinner.css'
import './css/carousel.css'
import './css/texteditor.css'

// import './assets/dog_1.jpg'
// Needed for Hot Module Replacement
editor(); 
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}
