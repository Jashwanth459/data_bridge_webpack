import { handleDeletePost, handleEditPost } from './handlePost'
import { handlePagination } from './pagination';
import { carouselButtonClick } from './carousel'

import edjsHTML from "editorjs-html";
import './popup.js'

/**
 * it is used for initialsing/ updating content in complete application
 * @param {Page Information} page
 */
export function render(page) {
    document.getElementById('spinner').style = 'display: unset'
    fetch('http://localhost:3000/data', {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        window.posts_list = res
        console.log('hey posts here ', res)
        prepareHTML(res, page)
    })
    .catch(function (error) {
        console.log('hey you ended up with error:  ', error);
    })
}
// Initialising functionality when application starts
setTimeout(render, 200)

/**
 * Attching appropriate handlers to the pagination buttons
 */
const attachPaginationHandlers = () => {
    let prevButton = document.getElementsByClassName('pagination_prev_button')[0]
    let nextButton = document.getElementsByClassName('pagination_next_button')[0]

    prevButton.addEventListener('click', handlePagination)
    nextButton.addEventListener('click', handlePagination)
    
}

/**
 * Handles paginaion button by enabling or disabling them
 * @param {page_number} page_number PageNumber 
 * @param {page} page Array with pagination button info for handling pagination
 * @param {dataLength} dataLength Number of blogs
 */
const handlePaginationButtons = (page_number, page, dataLength) => {
    if(page_number*2 <= dataLength && page_number*2 > dataLength-1 && page_number == 1) {
        let prevButton = document.getElementById('page_prev')
        prevButton.style = 'background-color: #bbbbbb;'
        let nextButton = document.getElementById('page_next_2')
        nextButton.style = 'background-color: #bbbbbb;'
    } else if (page_number == 1) {
        if (page && page[2]) {
            let prevButton = document.getElementById(`page_prev_1`)
            prevButton.id = 'page_prev'
            let nextButton = dataLength == 4 || dataLength == 3 ? document.getElementById('page_next') : document.getElementById('page_next_3')
            nextButton.id = `page_next_2`
            nextButton.style = 'background-color: #8bc34a;'
            prevButton.style = 'background-color: #bbbbbb;'

        } else {
            let button = document.getElementById('page_prev')
            button.style = 'background-color: #bbbbbb;'
            let nextButton = document.getElementById('page_next_2')
            nextButton.style = 'background-color: #8bc34a;'
        }
    } else if(page_number*2 == dataLength || page_number*2 == dataLength+1) {
    
        let nextButton = document.getElementById(`page_next_${page[2]}`)
        let prevButton = page[2] == 2 ? document.getElementById(`page_prev`) : document.getElementById(`page_prev_${Number(page[2])-2}`)
        prevButton.id = `page_prev_${Number(page[2])-1}`
        nextButton.id = 'page_next'
        nextButton.style = 'background-color: #bbbbbb;'
        prevButton.style = 'background-color: #8bc34a;'
    } else if(page[1] == 'next') {
        let prevButton = page[2] == 2 ? document.getElementById(`page_prev`) : document.getElementById(`page_prev_${Number(page[2])-2}`)
        if(page_number*2 == dataLength) {
            let nextButton = document.getElementById(`page_next_${page[2]}`)
            nextButton.id = 'page_next'
            nextButton.style = 'background-color: brown'
        } else {
            let nextButton = document.getElementById(`page_next_${page[2]}`)
            nextButton.id = `page_next_${Number(page[2])+1}`
            nextButton.style = 'background-color: #8bc34a;'
        }
        prevButton.id = `page_prev_${Number(page[2])-1}`
        prevButton.style = 'background-color: #8bc34a;'
    }  else if(page[1] == 'prev') {
        let prevButton = document.getElementById(`page_prev_${page[2]}`)
        let nextButton = page_number*2 < dataLength && page_number*2 >= dataLength-2   ? document.getElementById(`page_next`) : document.getElementById(`page_next_${Number(page[2])+2}`)
        prevButton.id = `page_prev_${Number(page[2])-1}`
        nextButton.id = `page_next_${Number(page[2])+1}`
        prevButton.style = 'background-color: #8bc34a;'
        nextButton.style = 'background-color: #8bc34a;'
    }
}

/**
 * Handles media content, for now images in the post if present
 * @param {element} element Json element of respective Blog
 * @param {divElem} divElem div element for holding particular blog html
 * @param {index} index blog index
 */
const handleMediaContent = (element, divElem, index) => {
    if (element?.media_content?.length > 0) {
        let carouselUnorderedList = document.createElement('ul')
        carouselUnorderedList.id = `carousel_${index+1}`
        carouselUnorderedList.className = 'carousel'
        element.media_content.forEach((media_element, media_index) => {
            let imageListElem = document.createElement('li')
            imageListElem.className = media_index == 0 ? 'image-sliderfade fade active' : 'image-sliderfade fade'

            let imgTag = document.createElement('img')
            imgTag.src = media_element
            imageListElem.appendChild(imgTag)
            carouselUnorderedList.appendChild(imageListElem)
        })

        let dots = document.createElement('ul')
        dots.className = 'active_dots'

        for(let i=0; i<element.media_content.length; i++) {
            let dotElem = document.createElement('li')
            dotElem.className = i == 0 ? 'dot active' : 'dot'
            dots.appendChild(dotElem)
        }

        carouselUnorderedList.appendChild(dots)

        let prevImg = document.createElement('a')
        prevImg.className = 'carousel_slide prev'
        prevImg.id = `prev_${index+1}_1`
        prevImg.title = 'Previous Image'
        prevImg.text = '«'
        prevImg.addEventListener('click', carouselButtonClick)

        let nextImg = document.createElement('a')
        nextImg.className = 'carousel_slide next'
        nextImg.id = `next_${index+1}_1`
        nextImg.title = 'Next Image'
        nextImg.text = '»'
        nextImg.addEventListener('click', carouselButtonClick)

        carouselUnorderedList.appendChild(prevImg)
        carouselUnorderedList.appendChild(nextImg)

        divElem.appendChild(carouselUnorderedList)
    }
}

/**
 * appends Edit or Delete button for post in the page
 * @param {div Element} divElem html div node of post to append EDIT and DELETE button 
 */
const appendEditAndDeleteButton = (divElem, element) => {
    let deleteButton = document.createElement('button')
    deleteButton.className = 'delete_button'
    let deleteIcon = document.createElement('i')
    deleteIcon.className = 'fa fa-trash'
    deleteIcon.id = element.id
    deleteButton.appendChild(deleteIcon)
    deleteButton.id = element.id
    deleteButton.addEventListener('click', handleDeletePost)
    let editButton = document.createElement('button')
    editButton.className = 'edit_button'
    let editIcon = document.createElement('i')
    editIcon.className = 'fa fa-edit'
    editIcon.id = element.id
    editButton.appendChild(editIcon)
    editButton.id = element.id
    editButton.addEventListener('click', handleEditPost)
    
    divElem.appendChild(deleteButton)
    divElem.appendChild(editButton)
}

/**
 * renders post Content
 * @param {div element} divElem div element of individual post
 * @param {element} element post in the form of JSON object
 */
const renderPostContent = (divElem, element) => {
    let postHead = document.createElement('h2')
    postHead.className = 'post_title'       

    postHead.id = `post_title_${element.id}`
    postHead.textContent = element?.title || 'Click edit to add Title'

    let postMessage = document.createElement('p')
    postMessage.className = 'post_message'
    postMessage.id = `post_message_${element.id}`
    const edjsParser = edjsHTML();
    const message_html = element && edjsParser.parse(JSON.parse(element.message));
    postMessage.innerHTML = message_html || 'Something was wrong, your message is missing... '

    divElem.appendChild(postHead)
    divElem.appendChild(postMessage)
}

/**
 * assists preparing HTML on initilisation, updation
 * @param {Data response from data source} res 
 * @param {Page Inforamtion} page 
 */
function prepareHTML(res, page) {
    let container = document.getElementById('post_container')
    console.log('container ', container)
    let posts_list = document.createElement('ul')
    posts_list.id = 'posts_list'
    posts_list.className = 'posts_list'
    document.getElementById('spinner').style = 'display: none'
    const page_number  = page ? Number(page && page[2]) ? page[2] : 4 : 1
    let dataLength = res.length
    let recentPosts = res.reverse()
    window.dataLength = Number(res[0].id)

    // Invoking attachPaginationHandlers
    attachPaginationHandlers()
    // Invoking handlePaginationButtons function
    handlePaginationButtons(page_number, page, dataLength)

    // Rendeting posts based on the page upon page initialisation or using pagination
    for (let index=(page_number-1)*2; index<=page_number*2-1 && index<res.length;index++) {
        let element = recentPosts[index]
        let listElem = document.createElement('li')
        listElem.className = 'post_card'
        listElem.id = `post_${index+1}`
        let divElem = document.createElement('div')

        // Invoking mediaContent function if media content presents
        handleMediaContent(element, divElem, index)

        // Method for appending Edit and Delete Nodes
        appendEditAndDeleteButton(divElem, element)

        // Rendering Head and Description of post
        renderPostContent(divElem, element)

        listElem.appendChild(divElem)
        posts_list.appendChild(listElem)
        if (document.getElementById('post_container').getElementsByClassName('posts_list').length == 0) {
            container.appendChild(posts_list)
        }
    }
}
