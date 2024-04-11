// document.addEventListener('DOMContentLoaded', function() {
//     var cartItems = localStorage.getItem('cartItems');
//     if (cartItems) {
//         cartItems = JSON.parse(cartItems);
//         var tbody = document.querySelector('#cart-table tbody');

//         // Lặp qua mỗi sản phẩm trong giỏ hàng và thêm vào bảng
//         cartItems.forEach(function(item) {
//             var row = document.createElement('tr');
//             var nameCell = document.createElement('td');
//             var priceCell = document.createElement('td');

//             nameCell.textContent = item.name;
//             priceCell.textContent = item.price;

//             row.appendChild(nameCell);
//             row.appendChild(priceCell);
//             tbody.appendChild(row);
//         });
//     } else {
//         console.log('Không có sản phẩm trong giỏ hàng.');
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var cartItems = localStorage.getItem('cartItems');
//     if (cartItems) {
//         cartItems = JSON.parse(cartItems);
//         var tbody = document.querySelector('#cart-table tbody');
//         var totalPrice = 0; // Biến tổng giá tiền

//         // Lặp qua mỗi sản phẩm trong giỏ hàng và thêm vào bảng
//         cartItems.forEach(function(item) {
//             var row = document.createElement('tr');
//             var nameCell = document.createElement('td');
//             var quantityCell = document.createElement('td');
//             var priceCell = document.createElement('td');

//             nameCell.textContent = item.name;
//             // Giả sử có 1 sản phẩm, không biết bạn lưu số lượng ở đâu, nếu có thì sử dụng item.quantity thay vì 1
//             quantityCell.textContent = 1;
//             priceCell.textContent = item.price;

//             row.appendChild(nameCell);
//             row.appendChild(quantityCell);
//             row.appendChild(priceCell);
//             tbody.appendChild(row);

//             // Cộng giá tiền của sản phẩm vào tổng
//             totalPrice += parseFloat(item.price.replace('đ', '').replace(',', ''));
//         });

//         // Hiển thị tổng giá tiền trong phần footer của bảng
//         var totalCell = document.querySelector('#total-price');
//         totalCell.textContent = 'Tổng giá: ' + totalPrice.toLocaleString() + 'đ';
//     } else {
//         console.log('Không có sản phẩm trong giỏ hàng.');
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
        var tbody = document.querySelector('#cart-table tbody');

        // Lặp qua mỗi sản phẩm trong giỏ hàng và thêm vào bảng
        cartItems.forEach(function(item) {
            var row = document.createElement('tr');
            var nameCell = document.createElement('td');
            var quantityCell = document.createElement('td');
            var priceCell = document.createElement('td');
            var deleteCell = document.createElement('td');
            var deleteBtn = document.createElement('button');

            nameCell.textContent = item.name;
            quantityCell.textContent = item.quantity;
            priceCell.textContent = item.price;
            deleteBtn.textContent = 'Xóa';
            deleteBtn.addEventListener('click', function() {
                deleteCartItem(item.name);
                updateCart();
                // Xóa dòng khỏi bảng sau khi xóa sản phẩm
                row.remove();
            });

            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            deleteCell.appendChild(deleteBtn);
            row.appendChild(deleteCell);
            tbody.appendChild(row);
        });
    } else {
        console.log('Không có sản phẩm trong giỏ hàng.');
    }

    updateCart();

    var payNowBtn = document.querySelector('#payment-form button[type="submit"]');
    payNowBtn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Đặt hàng thành công!');
        // Xóa giỏ hàng sau khi đặt hàng thành công
        localStorage.removeItem('cartItems');
        // Cập nhật lại giỏ hàng sau khi xóa
        updateCart();
    });
});

function deleteCartItem(name) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    var updatedCart = cartItems.filter(function(item) {
        return item.name !== name;
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
}

function updateCart() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    var total = 0;
    var tbody = document.querySelector('#cart-table tbody');
    tbody.innerHTML = ''; // Xóa toàn bộ nội dung cũ của bảng

    if (cartItems) {
        cartItems.forEach(function(item) {
            var row = document.createElement('tr');
            var nameCell = document.createElement('td');
            var quantityCell = document.createElement('td');
            var priceCell = document.createElement('td');
            var deleteCell = document.createElement('td');
            var deleteBtn = document.createElement('button');

            nameCell.textContent = item.name;
            quantityCell.textContent = item.quantity;
            priceCell.textContent = item.price;
            deleteBtn.textContent = 'Xóa';
            deleteBtn.addEventListener('click', function() {
                deleteCartItem(item.name);
                updateCart();
            });

            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            deleteCell.appendChild(deleteBtn);
            row.appendChild(deleteCell);
            tbody.appendChild(row);

            total += parseFloat(item.price);
        });
    }

    var totalCell = document.querySelector('#total-price');
    totalCell.textContent = 'Tổng giá: ' + total + 'đ';
}
