require(['./js/config.js'], function() {
    require(['better', 'swiper'], function(Better, Swiper) {
        console.log(Better);
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            direction: "horizontal",
            autoplay: {
                delay: 1500
            },
        });
    })
})