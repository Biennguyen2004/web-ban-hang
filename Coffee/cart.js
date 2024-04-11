function myFunction() {
    var x = document.getElementById("thongbao");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


// var cartIcons = document.querySelectorAll(".Cloudfee .price p");

// //Sự kiện click giỏ hàng ở sản phẩm
// cartIcons.forEach(function (icon) {
//     icon.addEventListener("click", function (even) {
//         e.preventDefault();

//         var productContainer = icon.closest(".Cloudfee");
//         var productImage = productContainer.querySelector(".price button img");
//         var productName = productContainer.querySelector(".des span").textContent;
//         var productPrice = productContainer.querySelector(".price p").textContent;
        
//         //check getting info product
//         console.log("Added");
//         console.log(productImage);
//         console.log(productName);
//         console.log(productPrice);
//     })
// })


var cartTable = document.getElementById('cart-table');
var cartIcon = document.getElementById('cart-icon');

// Thêm sự kiện "click" cho biểu tượng giỏ hàng
cartIcon.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của biểu tượng giỏ hàng
    event.preventDefault();

    window.open("giohang.html");
})

var cartIcons = document.querySelectorAll('.fa-solid.fa-cart-shopping');
cartIcons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
        
      event.preventDefault();


      var productContainer = icon.closest('.Cloudfee');
        // var productImage = productContainer.querySelector('.price button img').src;
      var productName = productContainer.querySelector('.des span').innerText;
      var productPrice = productContainer.querySelector('.price p').innerText; 
      console.log('Đã thêm sản phẩm vào giỏ hàng:');
      // console.log('Hình ảnh sản phẩm:', productImage);
      console.log('Tên sản phẩm:', productName);
      console.log('Giá sản phẩm:', productPrice);
      var product = {
          // 'image': productImage,
          'name': productName,
          'price': productPrice
      };

      // Kiểm tra xem đã có dữ liệu trong Local Storage chưa
      var cartItems = localStorage.getItem('cartItems');
      if (!cartItems) {
          // Nếu không có, tạo một mảng rỗng để lưu trữ sản phẩm
          cartItems = [];
      } else {
          // Nếu có, chuyển đổi chuỗi JSON thành mảng JavaScript
          cartItems = JSON.parse(cartItems);
      }

      // Thêm sản phẩm mới vào mảng
      cartItems.push(product);

      // Lưu lại mảng đã được cập nhật vào Local Storage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });
});