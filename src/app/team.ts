import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions,Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation,Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './team.html',
})
export class TeamComponent {
    storeData: any;
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
