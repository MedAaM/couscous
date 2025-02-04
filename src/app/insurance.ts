import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
import { Store } from '@ngrx/store';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './insurance.html',
})
export class InsuranceComponent {
    storeData: any;
    constructor(public store: Store<any>) {
        this.initStore();
    }

    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.blog-slider-button-next',
            prevEl: '.blog-slider-button-prev',
        },
        modules: [Navigation, Autoplay],
    };

    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/modern-saas/client-1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ];

    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
