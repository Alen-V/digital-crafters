console.log("Not empty")

let myBtn = document.getElementById(`navbarBtn`);
let hiddenContent = document.getElementById(`navbarHiddenContent`);
let escapeBtn = document.getElementById(`collapseEscapeButton`);

myBtn.addEventListener(`click`, function() {
    hiddenContent.style.width = `100%`
})

escapeBtn.addEventListener(`click`, function(){
    hiddenContent.style.width = `0%`

})