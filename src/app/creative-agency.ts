import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
import { Store } from '@ngrx/store';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './creative-agency.html',
})
export class CreativeComponent {
    storeData: any;
    constructor(public store: Store<any>) {
        this.initStore();
    }

    config: SwiperOptions = {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        speed: 2500,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints:{
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
        modules: [ Autoplay],
    };

    config1: SwiperOptions = {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        speed: 2500,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints:{
            450: {
                slidesPerView: 1.2,
            },
            700: {
                slidesPerView: 1.6,
            },
            1000: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 3.5,
            },
        },
        modules: [ Autoplay],
    };

    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'Marvin McKinney',
            role: 'Founder of Triple IT',
            thumbnail: '/assets/images/creative/client-img1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by alteration in some form, injected humour, or randomised words which don't look even slightly believable.",
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            role: 'Founder of Dope tech',
            thumbnail: '/assets/images/creative/client-img2.png',
            message:
                " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by alteration in some form, injected humour, or randomised words which don't look even slightly believable.",
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
