import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
import { Store } from '@ngrx/store';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './online-courses.html',
})
export class OnlineCoursesComponent {
    storeData: any;

    activeTab = 'all';
    constructor(public store: Store<any>) {
        this.initStore();
    }

    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 2500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
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
        modules: [Autoplay],
    };

    config1: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation:{
            nextEl: '.course-slider-button-next',
            prevEl: '.course-slider-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 2,
            },
        },
        modules: [Navigation, Autoplay],
    };

    config2: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation:{
            nextEl: '.testimonial-swiper-button-next',
            prevEl: '.testimonial-swiper-button-prev',
        },
        modules: [Navigation, Autoplay],
    };

    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
