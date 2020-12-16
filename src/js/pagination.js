import { render } from './init'

/**
 * Handles pagination Next and previous buttons, for getting data based on the page
 * @param {Target Event} e 
 */
export function handlePagination(e) {
    if (e.target.id == 'page_prev' || e.target.id == 'page_next') {
        return
    }
    const TRACKING_ID = e.target.id.split('_');
    let list = document.getElementById("posts_list")
    list.remove();
    let spinner = document.getElementById('spinner')
    if (TRACKING_ID[1] == 'prev') {
        spinner.style = 'op-spin 1.5s linear infinite'
    } else {
        spinner.style = 'spin 1.5s linear infinite'
    }
    spinner.style = 'display: inline-flex'
    setTimeout(() => {
        render(TRACKING_ID)
    }, 1000)
}
