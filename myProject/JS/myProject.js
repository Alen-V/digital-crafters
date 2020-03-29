console.log("Not empty")

let myBtn = document.getElementById(`navbarBtn`);
let hiddenContent = document.getElementById(`navbarHiddenContent`);
let escapeBtn = document.getElementById(`collapseEscapeButton`);

function show$HideContent(content) {
    if (content.style.display === `block`) {
        content.style.display = `none`;
    } else {
        content.style.display = `block`;
    }
}

myBtn.addEventListener(`click`, function() {
    show$HideContent(hiddenContent)
})

escapeBtn.addEventListener(`click`, function(){
    show$HideContent(hiddenContent)
})