/* ========== Start General Functions ========== */
// Scroll to some where
function scrollToSomeWhere(element) {
    element.forEach(li => {
        li.addEventListener("click", e => {
            document.querySelector(`#${e.target.dataset.section}`).scrollIntoView({behavior: "smooth"})
        })
    })
}

// Handle active class
function handleActive(lis) {
    lis.forEach(li => {
        li.addEventListener("click", e => {
            lis.forEach(li => {
                li.classList.remove("active");
            })
            e.target.classList.add("active")
        })
    })
}

// Icrease number of items in cart list
function increaseItems(num) {
    num.textContent = parseInt(num.textContent) + 1;
}

// Decrease number of items in cart list
function decreaseItems(num) {
    if (parseInt(num.textContent) != 0) {
        num.textContent = parseInt(num.textContent) - 1;
    }
}
/* ========== Start General Functions ========== */



/* ========== Start Navbar ========== */
let navbar = document.querySelector(".navbar");
let mainItems = document.querySelectorAll(".main-items li:not(li:first-of-type)")
let barIcon = document.querySelector(".fa-bars");
let overlay = document.querySelector(".overlay");
let menuList = document.querySelector(".overlay .menuList");
let menuListItems = document.querySelectorAll(".overlay .menuList li");
let closeBtn = document.querySelector(".closeBtn");

// Scroll to section from main menu in navbar
scrollToSomeWhere(mainItems);

// Add class active
handleActive(mainItems);
handleActive(menuListItems);

// Scroll to section from menu
menuListItems.forEach(li => {
    li.addEventListener("click", e => {
        document.querySelector(`#${e.target.dataset.section}`).scrollIntoView({behavior: "smooth"});
        overlay.style.cssText = "width: 0%";
        menuList.style.cssText = "display: none";
        closeBtn.style.cssText = "display: none";
    })
})

// Set default style for navbar
if (window.scrollY > 20) {
    navbar.style.cssText = "background-color: white; box-shadow: 0 1px 4px hsla(0, 4%, 15%, .10);";
}
else {
    navbar.style.cssText = "background-color: transparent";
}

// Set the style for navbar on scroll
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.style.cssText = "background-color: white; box-shadow: 0 1px 4px hsla(0, 4%, 15%, .10)";
    } 
    else {
        navbar.style.cssText = "background-color: transparent";
    }
}

// Show the menu when click on icon.
barIcon.onclick = () => {
    overlay.style.cssText = "width: 100%";
    menuList.style.cssText = "display: block";
    closeBtn.style.cssText = "display: block";
}

// Close the menu when click on icon.
closeBtn.onclick = () => {
    overlay.style.cssText = "width: 0%";
    menuList.style.cssText = "display: none";
    closeBtn.style.cssText = "display: none";
}
/* ========== End Navbar ========== */



/* ========== Start Cart Menu ========== */
let cartIcon = document.querySelector(".fa-cart-shopping");
let my_cart = document.querySelector(".navbar .my-cart");
let closeCart = document.querySelector(".navbar .my-cart .closeBtn");
let headCart = document.querySelector(".navbar .my-cart h2");
let addToCart = document.querySelectorAll(".products .products-items .product-box");
listOfIcons = Array.from(addToCart);

// Create Cart body
cartIcon.addEventListener("click", () => {

    if (document.body.offsetWidth > 768) {
        my_cart.style.cssText = "width: 420px";
        headCart.style.cssText = "display: block";
    }
    else {
        my_cart.style.cssText = "width: 100%";
        headCart.style.cssText = "display: block";
    }

}) 

// Add to cart
listOfIcons.forEach (icon => { 

    icon.addEventListener("click", (e) => {
        
        if (e.target.classList.contains("fa-cart-plus") || e.target.classList.contains("btn-add")) {
            
            // Create product
            let li = document.createElement("li");
            li.style.cssText = "list-style: none; margin: 0px 20px 20px 20px;"

            // pro-box
            let pro_box = document.createElement("div");
            pro_box.className = "pro-box";
            li.appendChild(pro_box);
            
            // pro-box > pro-img
            let pro_img = document.createElement("div");
            pro_img.className = "pro-img";
            pro_box.appendChild(pro_img);

            // pro-box > pro-img > img
            let img = document.createElement("img");
            img.src = icon.dataset.img;
            img.alt = "pro-img-cart";
            pro_img.appendChild(img);

            // pro-box > pro-data
            let pro_data = document.createElement("div");
            pro_data.className = "pro-data";
            pro_box.appendChild(pro_data);

            // pro-box > pro-data > data
            let data = document.createElement("div");
            data.className = "data";
            pro_data.append(data);

            // pro-box > pro-data > data > name
            let name = document.createElement("div");
            name.className = "name";
            let nameTxt = document.createTextNode(icon.dataset.name);
            name.appendChild(nameTxt);
            data.appendChild(name);

            // pro-box > pro-data > data > price
            let price = document.createElement("div");
            price.className = "price";
            let priceTxt = document.createTextNode(icon.dataset.price);
            price.appendChild(priceTxt);
            data.appendChild(price);

            // pro-box > pro-data > pro-count
            let pro_count = document.createElement("div");
            pro_count.className = "pro-count";
            pro_data.appendChild(pro_count);
            
            // pro-box > pro-data > pro-count > counter
            let counter = document.createElement("div");
            counter.className = "counter";
            pro_count.appendChild(counter);

            // pro-box > pro-data > pro-count > counter > minus
            let minus = document.createElement("div");
            minus.className = "minus";
            minus.style.cssText = "cursor: pointer; user-select: none;";
            let minusTxt = document.createTextNode("-");
            minus.appendChild(minusTxt);
            counter.appendChild(minus);

            // pro-box > pro-data > pro-count > counter > count
            let count = document.createElement("div");
            count.className = "count";
            let countTxt = document.createTextNode("1");
            count.appendChild(countTxt);
            counter.appendChild(count);
            
            // pro-box > pro-data > pro-count > counter > plus
            let plus = document.createElement("div");
            plus.className = "plus";
            plus.style.cssText = "cursor: pointer; user-select: none;";
            let plusTxt = document.createTextNode("+");
            plus.appendChild(plusTxt);
            counter.appendChild(plus);

            // Function :: Increase number of items
            plus.addEventListener("click", () => {
                increaseItems(count);
            })

            // Function :: Decrease number of items
            minus.addEventListener("click", () => {
                decreaseItems(count);
            })

            // pro-box > pro-data > pro-count > del-icon
            let delIcon = document.createElement("i");
            delIcon.className = "del fa-solid fa-trash";
            pro_count.appendChild(delIcon);

            // Function :: Delete product
            delIcon.addEventListener("click", () => {
                li.remove();
            })

            // Add li to cart-list
            my_cart.appendChild(li)

        }

    })

})

// Close cart
closeCart.onclick = () => {
    my_cart.style.cssText = "width: 0px";
    headCart.style.cssText = "display: none";
}
/* ========== End Cart Menu ========== */



/* ========== Start Up button ========== */
let up = document.querySelector(".up");

// Show and hide up button
window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
        up.style.cssText = "right: 30px";
    }
    else {
        up.style.cssText = "right: -55px";
    }
})

// Scroll to up
up.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})
/* ========== End Up button ========== */



/* ========== Start Swiper Of Products ========== */
var swiper = new Swiper(".product-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/* ========== End Swiper Of Products ========== */



/* ========== End Swiper Of New ========== */
var swiper = new Swiper(".new-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
    },
    // when window width is >= 480px
    580: {
        slidesPerView: 2,
        spaceBetween: 25
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 25
    },
    992: {
        slidesPerView: 4,
        spaceBetween: 25
    }
}
});
/* ========== End Swiper Of New ========== */