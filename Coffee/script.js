// Khai bao mang
// Nhap vao cac phan tu cua mang
// 1. Tinh tong cac phan tu cua mang
// 2. Check mang doi xung
// 3. Sap xep mang tang dan

var arr = [9, 2, 5, 10, 2, 1];

var arr_length = arr.length;
// function check symmetrical array
function checkArray(arr) {
    for (var i = 0; i < mid; i++) {
        if (arr[i] !== arr[arr_length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkArray(arr));

// function Sort Arr
function SortArr(arr){
    for (var i = 0; i < arr_length; i++){
        for(var j = i+1 ; j < arr_length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for (var i = 0; i < arr_length; i++){
        console.log(arr[i]);
    }
}
SortArr(arr);




// for (var i = 0; i < arr_length; i++){
//     console.log(arr[i]);
// }

var mid = arr_length / 2;

// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function showSlide(slideIndex) {
//   slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.classList.add('active');
//     } else {
//       slide.classList.remove('active');
//     }
//   });
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// document.querySelector('.next-button').addEventListener('click', nextSlide);
// document.querySelector('.prev-button').addEventListener('click', prevSlide);

// setInterval(nextSlide, 3000);

// script.js







// document.addEventListener('DOMContentLoaded', function () {
//     const slidesContainer = document.querySelector('[data-carousel-slides-container]');
//     const prevButton = document.querySelector('[data-carousel-button-previous]');
//     const nextButton = document.querySelector('[data-carousel-button-next]');

//     let currentIndex = 0;
//     const slideWidth = slidesContainer.clientWidth;

//     // Move to the next slide
//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % 4;
//         updateSlidePosition();
//     }

//     // Move to the previous slide
//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + 4) % 4;
//         updateSlidePosition();
//     }

//     // Update slide position
//     function updateSlidePosition() {
//         slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     }

//     // Attach event listeners to buttons
//     prevButton.addEventListener('click', prevSlide);
//     nextButton.addEventListener('click', nextSlide);

//     // Automatically move to the next slide every 3 seconds
//     setInterval(nextSlide, 3000);
// });





var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
















// function DarkMode() {
//     document.querySelector('.box').style.backgroundColor = '#534f4f';
// }

// function LightMode() {
//     document.querySelector('.box').style.backgroundColor = 'aliceblue'; 
// }


// let x = ;
// let y = 10;

// let z = x + y;

// let x = parseFloat(prompt("Enter the value for x:", 10)); 
// let y = parseFloat(prompt("Enter the value for y:", 20));   

// alert(z);

// document.write("This is content from file JS");


// if(!isNaN(x) && !isNaN(y)){
//     let z = x + y;
//     document.querySelector(".operator").textContent = "The value of z is " + z + ".";
// }
// else {
//     alert("Invalid input! Please enter valid numbers for x and y.");
// }


// alert("Welcome to JS basic");