console.log("Not empty")

let myBtn = document.getElementById(`navbarBtn`);
let hiddenContent = document.getElementById(`navbarHiddenContent`);

function show$HideContent(content, button) {
    if (content.style.display === `block`) {
        content.style.display = `none`;
        // button.style.display = `block`
    } else {
        content.style.display = `block`;
        // button.style.display = `none`
    }// add animations for the content
}

myBtn.addEventListener(`click`, function() {
    show$HideContent(hiddenContent, myBtn)
})