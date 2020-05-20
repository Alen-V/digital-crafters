console.log("Not empty")

let myBtn = document.getElementById(`navbarBtn`);
let hiddenContent = document.getElementById(`navbarHiddenContent`);
let escapeBtn = document.getElementById(`collapseEscapeButton`);
let anchorTag = hiddenContent.children[1].children

function contentWidth(element, value) {
    element.style.width = `${value}`
}

myBtn.addEventListener(`click`, function() {
    hiddenContent.style.width = `100%`
})

escapeBtn.addEventListener(`click`, function(){
    hiddenContent.style.width = `0%`
})

for (let i = 0; i < anchorTag.length; i++) {
    anchorTag[i].addEventListener(`click`, function() {
        hiddenContent.style.width = `0%`
    })    
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

$('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    dots: true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            autoplay: true,
            autoplayHoverPause: true,
            items:1,
            nav:true,
            loop:true
        }
    }
})


    
$(`.owl-carousel .owl-dot`).owlCarousel({
    autoHeight:true,
    autoWidth: true    
})



let previousBtn = document.getElementsByClassName(`owl-prev`)[0]
let nextBtn = document.getElementsByClassName(`owl-next`)[0]
previousBtn.innerHTML = `<div class="sliderButton">
    <i class="fas fa-angle-left"></i>
</div>
`
nextBtn.innerHTML = `<div class="sliderButton">
    <i class="fas fa-angle-right"></i>
</div>
`

$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#backTopBtn').fadeIn();
        } else {
            $('#backTopBtn').fadeOut();
        }
    });
    //Click event to scroll to top
    $('#backTopBtn').click(function(){
        $('html, body').animate({scrollTop : 0},10);
        return false;
    });
});
