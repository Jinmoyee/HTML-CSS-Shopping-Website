const bar = document.querySelector("#bar");
const nav = document.querySelector("#lists");
const cross = document.getElementById("cross");
const mainProductImage = document.getElementById("main-img");
const smallProductsImages = document.getElementsByClassName("images")


if(bar) {
    bar.addEventListener("click", function () {
        nav.classList.add("active");
    })
}

if(cross) {
    cross.addEventListener("click", function() {
        nav.classList.remove("active");
    })
}

// smallProductsImages[0].onclick = function () {
//     mainProductImage.src = smallProductsImages[0].src;
// }

// smallProductsImages[1].onclick = function () {
//     mainProductImage.src = smallProductsImages[1].src;
// }

// smallProductsImages[2].onclick = function () {
//     mainProductImage.src = smallProductsImages[2].src;
// }

// smallProductsImages[3].onclick = function () {
//     mainProductImage.src = smallProductsImages[3].src;
// }

if(smallProductsImages) {
    for(let i = 0 ; i<smallProductsImages.length ; i++) {
        smallProductsImages[i].onclick = function () {
            mainProductImage.src = smallProductsImages[i].src;
        }
    } 
}