/*------------------------------------------------
    Hiển thị Box Nội dung khi nhấn icon - header
-------------------------------------------------*/
const btnList = document.querySelectorAll('.btn-header');
const boxList = document.querySelectorAll('.box');
const ArrID = ['navbar', 'search-form', 'shopping-cart', 'login-form'];

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

/*-------------------------------------------
    Ẩn Box Nội dung khi cuộn - header
--------------------------------------------*/
window.onscroll = () => {
    setTimeout(() => {
        for (let i = 0; i < btnList.length; i++) {
            btnList[i].classList.remove('active');
        }
        for (let i = 0; i < boxList.length; i++) {
            ArrID.classList.remove('active');
        }
    }, 200);
};

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
