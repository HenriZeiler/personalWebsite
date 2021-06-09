const swiper = new Swiper('.con1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

swiper.on('slideChangeTransitionEnd', changeNavBar);

function toLastPage() {
    swiper.slideTo(3)
}

function changeNavBar() {
    var current = document.querySelector(".swiper-slide-active").id;
    document.querySelector(".active").classList.remove("active");

    document.querySelector("#" + current + "-nav").classList.add("active");

}

document.querySelector("#page1-nav").addEventListener("click", () => {
    swiper.slideTo(0);
});

document.querySelector("#page2-nav").addEventListener("click", () => {
    swiper.slideTo(1);
});

document.querySelector("#page3-nav").addEventListener("click", () => {
    swiper.slideTo(2);
});

document.querySelector("#page4-nav").addEventListener("click", () => {
    swiper.slideTo(3);
});