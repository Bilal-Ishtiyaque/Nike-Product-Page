'use strict';



/*** add event on element*/

const addEventOnElement = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/** navbar toggle*/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll(".navbar-link");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElement(navbarLinks, "click", closeNav);



/** make slider functionality */

// select all element for DOM manupulation

const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");
let sliderItems = document.querySelectorAll(".product-banner");

// set the default slider position
let sliderPos = 0;

// set the number of total slider items
const totalSliderItems = sliderItems.length;

sliderEnd();

// make next slide btn workable
const slideToNext = function () {

  sliderPos++;

  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();

}

addEventOnElement(nextBtn, "click", slideToNext);


// make prev slide btn workable
const slideToPrev = function () {

  sliderPos--;

  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();

}

addEventOnElement(prevBtn, "click", slideToPrev);


// check when slider is end then what sould slider btn do
function sliderEnd() {
  if (sliderPos >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (sliderPos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

//  quantity add/minus

const price = document.querySelector("[data-total-price]");
const quantity = document.querySelector("[data-quantity]");
const addQuantityBtn = document.querySelector("[data-add-quantity]");
const minQuantityBtn = document.querySelector("[data-minus-quantity]");

//default quantity
let qty = 1;

let productPrice = 125;

// default initial price
let totalPrice = 125;


const increasePriceQty = function(){
  qty++;
  quantity.textContent = qty;

  totalPrice = qty * productPrice;
  price.textContent = totalPrice;

};

//elem type callback

addEventOnElement(addQuantityBtn, "click" , increasePriceQty);

const decreasePriceQty = function(){
  if (qty > 1) {
    qty--;
  }

  quantity.textContent = qty;

  totalPrice = qty * productPrice;
  price.textContent = totalPrice;

  if (qty === 1) {

    price.textContent = `${totalPrice}.00`;
    
  }
};

//elem type callback

addEventOnElement(minQuantityBtn, "click" , decreasePriceQty);