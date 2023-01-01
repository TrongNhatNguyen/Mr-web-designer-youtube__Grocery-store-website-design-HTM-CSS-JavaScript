var swiper = new Swiper('.product-slider', {
    loop: true,
    spaceBetween: 30,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // ĐIỆN THOẠI DỌC MAX 180px -> 479px
        0: {
            slidesPerView: 1,
        },
        // ĐIỆN THOẠI NGANG MAX 480px -> 767px
        480: {
            slidesPerView: 2,
        },
        // ĐIỆN THOẠI NGANG MAX 768px -> 1023
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper('.review-slider', {
    loop: true,
    spaceBetween: 30,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        // ĐIỆN THOẠI DỌC MAX 180px -> 479px
        0: {
            slidesPerView: 1,
        },
        // ĐIỆN THOẠI NGANG MAX 480px -> 767px
        480: {
            slidesPerView: 2,
        },
        // ĐIỆN THOẠI NGANG MAX 768px -> 1023
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
