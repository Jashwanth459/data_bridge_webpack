/**
 * hanldes Carousel previous or next button clicks on the post
 * @param {event} e Target event upon clicking next/previous button in the carousel
 */
export function carouselButtonClick(e) {
    const oppositeMatching = {next: 'prev', prev: 'next'}
    let carouselButton = document.getElementById(e.target.id);
    let trackingId = e.target.id.split('_')
    let carouselId = `carousel_${trackingId[1]}`
    let carouselImages  = document.getElementById(carouselId)
    let carouselImagesList = carouselImages.getElementsByClassName('image-sliderfade')
    let dots = carouselImages.getElementsByClassName('dot')
    carouselImagesList[trackingId[2]-1].className = 'image-sliderfade fade'
    dots[trackingId[2]-1].className = 'dot'

    // Handles Carousel Previous click
    if (trackingId[0] === 'prev') {
        let nextCarouselbutton = document.getElementById(`${oppositeMatching[trackingId[0]]}_${trackingId[1]}_${trackingId[2]}`)
        
        if (trackingId[2] == 1) {
            carouselImages.getElementsByClassName('image-sliderfade')[carouselImagesList.length-1].className = 'image-sliderfade fade active'
            dots[carouselImagesList.length-1].className = 'dot active' 
            trackingId[2] = carouselImagesList.length;
            nextCarouselbutton.id = `next_${trackingId[1]}_${trackingId[2]}`
            carouselButton.id = `prev_${trackingId[1]}_${trackingId[2]}`
        } else {
            carouselImages.getElementsByClassName('image-sliderfade')[trackingId[2]-2].className = 'image-sliderfade fade active'
            dots[trackingId[2]-2].className = 'dot active' 
            trackingId[2] = trackingId[2]-1;
            nextCarouselbutton.id = `next_${trackingId[1]}_${trackingId[2]}`
            carouselButton.id = `prev_${trackingId[1]}_${trackingId[2]}`
        }
    }

    // Handles Carousel Next button click
    if (trackingId[0] === 'next') {
        let prevCarouselbutton = document.getElementById(`prev_${trackingId[1]}_${trackingId[2]}`)
        
        if (carouselImagesList.length == trackingId[2]) {
            carouselImages.getElementsByClassName('image-sliderfade')[0].className = 'image-sliderfade fade active'
            dots[0].className = 'dot active' 
            trackingId[2] = 1;
            prevCarouselbutton.id = `prev_${trackingId[1]}_1`
            carouselButton.id = `next_${trackingId[1]}_1`
        } else {
            carouselImages.getElementsByClassName('image-sliderfade')[trackingId[2]].className = 'image-sliderfade fade active'
            dots[trackingId[2]].className = 'dot active' 
            trackingId[2] = Number(trackingId[2])+1;
            prevCarouselbutton.id = `prev_${trackingId[1]}_${trackingId[2]}`
            carouselButton.id = `next_${trackingId[1]}_${trackingId[2]}`
        }
    }
}
