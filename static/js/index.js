// 轮播图插件
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:{
        delay:3000,
        stopOnLastSlide:false,
        disableOnInteraction:true,
    },
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
})






