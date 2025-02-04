import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions,Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './healthcare.html',
})
export class HealthcareComponent {
    storeData: any;
    feedbacks: any = [
        {
            id: 1,
            name: 'Jack danver',
            role: 'Patient of cancer',
            thumbnail: '/assets/images/testimonial3.png',
            message: 'I had a great experience with doctor ralph Edward. His surgery technique is very good. i satisfied with his team members. Thank you!!',
        },
    ];
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 2500,
        autoplay: {
            delay: 0,
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
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 8,
            },
        },
    };
    teamSliderConfig: SwiperOptions = {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.team-swiper-button-next',
            prevEl: '.team-swiper-button-prev',
        },
        modules: [Navigation],
    };
    constructor(public store: Store<any>) {
        this.initStore();
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
