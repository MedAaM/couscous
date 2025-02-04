import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
    moduleId: module.id,
    templateUrl: './application.html',
})
export class ApplicationComponent {
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 2500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 7,
            },
        },
    };
    constructor() {}
}
