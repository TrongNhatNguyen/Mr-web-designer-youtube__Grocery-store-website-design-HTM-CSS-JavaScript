/*------------------------------------------------
    Hiển thị form tìm kiếm khi nhấn icon - header
-------------------------------------------------*/
// let searchBTN = document.querySelector('.search-btn');
// searchBTN.onclick = (e) => {
//     searchBTN.classList.toggle('btn-active');
//     toggleClass('.search-form');
//     toggleClass('.shopping-cart', false);
// };

/*------------------------------------------------
    Hiển thị Shopping Cart khi nhấn icon - header
-------------------------------------------------*/
// document.querySelector('#shopping-cart-btn').onclick = () => {
//     this.classList.toggle('btn-active');
//     toggleClass('.shopping-cart');
//     toggleClass('.search-form', false);
// };
const btnList = document.querySelectorAll('.btn-header');
const ArrID = ['search-form', 'shopping-cart', 'login-form'];

// 1. Dò tất cả các button có class giống nhau:
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', () => {
        // 2. Dò lại và xoá class 'btn-active' có sẵn:
        for (let i = 0; i < btnList.length; i++) {
            btnList[i].classList.remove('btn-active');
        }

        // 3. thêm class 'btn-active' vừa chọn:
        btnList[i].classList.toggle('btn-active');

        // 4. hiển thị form nội dung theo button đã chọn:
        let btnID = btnList[i].getAttribute('id');
        for (let i = 0; i < ArrID.length; i++) {
            if (ArrID[i] == btnID) {
                document.querySelector('.' + ArrID[i]).classList.toggle('active');
            } else {
                document.querySelector('.' + ArrID[i]).classList.remove('active');
            }
        }
    });
}

// ==========================================
function toggleShowPassword() {
    var x = document.getElementById('password');
    // var x = document.getElementsByClassName('.password');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}
