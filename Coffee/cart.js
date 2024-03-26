// var cartIcons = document.querySelectorAll(".fa-solid fa-cart-shopping");
// cartIcons.forEach(function(icon){
//     icon.addEventListener("click", function(even){
//         even.defaultPrevented();
//         var productContainer = icon.closest('.Cloudfee');
//         var producetName = productContainer.querySelector(".des span");
//         var productPrice = productContainer.querySelector(".price p");

//         console.log("Added")
//         console.log("Product name: " + producetName)
//         console.log("Price: " + productPrice)
//     })



// })


document.addEventListener("DOMContentLoaded", function() {
    var cartIcons = document.querySelectorAll(".fa-solid fa-cart-shopping");
  
    cartIcons.forEach(function(icon) {
      icon.addEventListener("click", function(event) {
        event.preventDefault();
        var productContainer = icon.closest('.Cloudfee');
        var productName = productContainer.querySelector(".des span").textContent;
        var productPrice = productContainer.querySelector(".price p").textContent;
  
        console.log("Added");
        console.log("Product name: " + productName);
        console.log("Price: " + productPrice);
      });
    });
  });
// var cartIcons = document.querySelectorAll(".Cloudfee .price a");

// cartIcons.forEach(function (icon) {
//     icon.addEventListener("click", function (e) {
//         e.preventDefault();

//         var productContainer = icon.closest(".Cloudfee");

//         var productName = productContainer.querySelector(".des span").textContent;
//         var productPrice = productContainer.querySelector(".price span").textContent;

//         //check getting info product
//         console.log("Added");
//         console.log(productName);
//         console.log(productPrice);
//     })

// })



// var cartIcons = document.querySelectorAll(".fa-solid .fa-cart-shopping");
// cartIcons.forEach(function(icon){
//     icon.addEventListener("click", function(event){
//         event.preventDefault();
//         var productContainer = icon.closest('.Cloudfee');
//         var producetName = productContainer.querySelector(".des span").textContent;
//         var productPrice = productContainer.querySelector(".price p").textContent;

//         console.log("Added");
//         console.log("Product name: " + producetName);
//         console.log("Price: " + productPrice);
//     });
// });



// var cartIcons = document.querySelectorAll(".fa-solidfa-cart-shopping");

// cartIcons.forEach(function(icon) {
//     icon.addEventListener("click", function(event) {
//         event.preventDefault();
//         var productContainer = icon.closest('.Cloudfee');
//         var productName = productContainer.querySelector(".des span").textContent;
//         var productPrice = productContainer.querySelector(".price p").textContent;

//         console.log("Added");
//         console.log("Product name: " + productName);
//         console.log("Price: " + productPrice);
//     });
// });