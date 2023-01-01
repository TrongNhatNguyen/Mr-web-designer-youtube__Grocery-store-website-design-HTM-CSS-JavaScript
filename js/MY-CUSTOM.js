/*------------------------------------------------
    Hiển thị Box Nội dung khi nhấn icon - header
-------------------------------------------------*/
const btnList = document.querySelectorAll('div.icons > div');
const boxList = document.querySelectorAll('.box-header');
const ArrBoxID = ['navbar', 'search-form', 'shopping-cart', 'login-form'];

// 1. Dò tất cả các button có class giống nhau:
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', () => {
        // 2. Dò lại và xoá class 'btn-active' có sẵn (trừ click nút đang có sẵn):
        if (!btnList[i].classList.contains('active')) {
            for (let i = 0; i < btnList.length; i++) {
                btnList[i].classList.remove('active');
            }
        }

        // 3. Thêm class 'btn-active':
        btnList[i].classList.toggle('active');

        // 4. hiển thị form nội dung theo button đã chọn:
        let btnID = btnList[i].getAttribute('id');
        for (let i = 0; i < ArrBoxID.length; i++) {
            if (ArrBoxID[i] == btnID) {
                document.querySelector('.' + ArrBoxID[i]).classList.toggle('active');
            } else {
                document.querySelector('.' + ArrBoxID[i]).classList.remove('active');
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
        for (let i = 0; i < ArrBoxID.length; i++) {
            document.querySelector('.' + ArrBoxID[i]).classList.remove('active');
        }
    }, 200);
};

// ==========================================
function toggleShowPassword() {
    var x = document.getElementById('password');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}
