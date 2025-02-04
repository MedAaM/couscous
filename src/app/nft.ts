import { Component } from '@angular/core';
import { config } from 'rxjs';
import SwiperCore, { SwiperOptions, Navigation, Autoplay, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay,Thumbs]);
@Component({
    moduleId: module.id,
    templateUrl: './nft.html',
})
export class NftComponent {
    activeTab = 'all';
    thumbsSwiper: any;
    config1: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 2500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
        breakpoints: {
            320: {
                slidesPerView: 1.7,
            },
            600: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 6,
            },
        },
    };
    config2: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 2500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            },
            1600: {
                slidesPerView: 7,
            },
        },
    };
    config3: SwiperOptions = {
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        watchSlidesProgress: true,
    };
    config4: SwiperOptions = {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.client-slider-button-next',
            prevEl: '.client-slider-button-prev',
        },
        modules: [Navigation, Thumbs],
    };
    setThumbsSwiper = (swiper: any) => {
        this.thumbsSwiper = swiper;
    };
    constructor() {}
}
