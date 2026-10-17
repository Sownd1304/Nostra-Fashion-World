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
// Filter

const filterBtn = document.getElementById("filterBtn");

    const filterPopup = document.getElementById("filterPopup");

    const doneBtn = document.getElementById("doneBtn");

    const clearBtn = document.getElementById("clearBtn");

    const checkboxes = document.querySelectorAll(".category");

    const products = document.querySelectorAll(".product");


    // Open filter popup

    filterBtn.addEventListener("click", function() {

        filterPopup.classList.remove("hidden");

    });


    // Apply filters when Done is clicked

    doneBtn.addEventListener("click", function() {

        let selectedCategories = [];

        checkboxes.forEach(function(checkbox) {

            if (checkbox.checked) {

                selectedCategories.push(checkbox.value);

            }

        });


        products.forEach(function(product) {

            let productCategories =
                product.dataset.category.split(" ");

            if (selectedCategories.length === 0) {

                product.classList.remove("hidden");

            } else {

                let match = selectedCategories.some(function(category) {

                    return productCategories.includes(category);

                });

                if (match) {

                    product.classList.remove("hidden");

                } else {

                    product.classList.add("hidden");

                }

            }

        });


        // Close popup

        filterPopup.classList.add("hidden");

    });


    // Clear all filters

    clearBtn.addEventListener("click", function() {

        checkboxes.forEach(function(checkbox) {

            checkbox.checked = false;

        });

        products.forEach(function(product) {

            product.classList.remove("hidden");

        });

        filterPopup.classList.add("hidden");

    });