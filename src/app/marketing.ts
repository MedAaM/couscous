import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './marketing.html',
})
export class MarketingComponent {
    storeData: any;
    activeTab = 'all';
    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/testimonial2.png',
            message:
                'An amazing services. We have a great business relationship with this agency, They help bring our vision to life in a way that makes sense. SEO work execute really well. great & phenomenal experience.',
        },
    ];
    config1: SwiperOptions = {
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
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev2',
        },
        modules: [Navigation],
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
