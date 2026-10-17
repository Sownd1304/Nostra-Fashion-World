// popup section
var popupx=document.getElementById("popupx")
popupx.addEventListener("click",function(){
    var popup=document.getElementById("popup")
    var home=document.getElementById("home")
    popup.style.display="none"
    home.style.top=0
})
// nav section
var menu=document.getElementById("menu")
menu.addEventListener("click",function(){
    var addnav=document.getElementById("addnav")
    addnav.style.display="block"
})
var navx=document.getElementById("navx")
navx.addEventListener("click",function(){
    var addnav=document.getElementById("addnav")
    addnav.style.display="none"
})
// Navigation
const buttons = document.querySelectorAll("nav button")
console.log("Buttons found:", buttons.length)
buttons.forEach(function(button) {
button.addEventListener("click", function() {
        const targetId = button.dataset.target

        const section = document.getElementById(targetId)
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            })
        }

    })

})
// Image slider
const galleryContainer=document.querySelector('.gallery-container')
const galleryControlsContainer=document.querySelector('.gallery-controls')
const galleryControls=['previous','next']
const galleryItems=document.querySelectorAll('.gallery-item')

class carousel{
    constructor(container,items,controls){
        this.carouselContainer=container
        this.carouselControls=controls

    }
}
// mostwanted
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('mostwanted');
    var nextButton = document.getElementById('arrow-right1');
    var prevButton = document.getElementById('arrow-left1');

    if (container && nextButton && prevButton) {
        // Scroll Right
        nextButton.addEventListener('click', function() {
            var cardWidth = container.querySelector('.product').clientWidth + 15; // Card width + gap
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        // Scroll Left
        prevButton.addEventListener('click', function() {
            var cardWidth = container.querySelector('.product').clientWidth + 15; // Card width + gap
            container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    } else {
        console.log("Slider elements not found! Check your IDs.");
    }
});

