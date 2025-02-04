import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
import { Store } from '@ngrx/store';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './job-placement.html',
})
export class JobPlacementComponent {
    storeData: any;

    activeTab = 'all-jobs';
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
        modules: [Autoplay],
    };

    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
