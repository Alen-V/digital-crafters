console.log("Not empty")

let myBtn = document.getElementById(`navbarBtn`);
let hiddenContent = document.getElementById(`navbarHiddenContent`);
let escapeBtn = document.getElementById(`collapseEscapeButton`);
let pages = document.getElementsByClassName(`pages`);
let sliderBtn = document.getElementsByClassName(`sliderBtn`)
let sliderDot = document.getElementsByClassName(`sliderDot`);

function hidePages(pages){
    for (let page of pages) {
       page.style.display = "none";
    }
}

function showPage(page){
    page.style.display = "block";
}

hidePages(pages);
showPage(pages[0]);

let sliderCounter = 0;

function sliderButtons() {
    hidePages(pages)
    showPage(pages[sliderCounter]);
}

sliderBtn[0].addEventListener(`click`, function(){
    if(sliderCounter === 0) return;
    sliderDot[sliderCounter].classList.remove(`active`)
    sliderCounter = sliderCounter - 1;
    hidePages(pages)
    showPage(pages[sliderCounter])
    sliderDot[sliderCounter].classList.add(`active`)
})

sliderBtn[1].addEventListener(`click`, function() {
    if(sliderCounter === 5) return;
    sliderDot[sliderCounter].classList.remove(`active`)
    sliderCounter++
    sliderButtons();
    sliderDot[sliderCounter].classList.add(`active`)
})

myBtn.addEventListener(`click`, function() {
    hiddenContent.style.width = `100%`
})

escapeBtn.addEventListener(`click`, function(){
    hiddenContent.style.width = `0%`

})