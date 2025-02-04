import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './real-estate.html',
})
export class RealEstateComponent {
    storeData: any;
    activeTab = 'residentails';
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.feedback-slider-button-prev',
            nextEl: '.feedback-slider-button-next',
        },
        modules: [Navigation, Autoplay],
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
