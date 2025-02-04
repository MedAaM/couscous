import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { Store } from '@ngrx/store';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './photography.html',
})

export class PhotographyComponent {
    storeData: any;
    activeTab = 'all';
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
            nextEl: '.feedback-slider-button-next',
            prevEl: '.feedback-slider-button-prev',
        },
        modules: [Navigation, Autoplay],
    };

    config1: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides:true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        },
        modules: [ Autoplay],
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
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
        modules: [Autoplay],
    };

    items = [
        { src: '/assets/images/photography/img1.jpg', thumb: '/assets/images/photography/img1.jpg' },
        { src: '/assets/images/photography/img2.jpg', thumb: '/assets/images/photography/img2.jpg' },
        { src: '/assets/images/photography/img3.jpg', thumb: '/assets/images/photography/img3.jpg' },
        { src: '/assets/images/photography/img4.jpg', thumb: '/assets/images/photography/img4.jpg' },
        { src: '/assets/images/photography/img5.jpg', thumb: '/assets/images/photography/img5.jpg' },
        { src: '/assets/images/photography/img6.jpg', thumb: '/assets/images/photography/img6.jpg' },
        { src: '/assets/images/photography/img7.jpg', thumb: '/assets/images/photography/img7.jpg' },
        { src: '/assets/images/photography/img8.jpg', thumb: '/assets/images/photography/img8.jpg' },
    ];

    constructor(public store: Store<any>, private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
        this.initStore();
        _lightboxConfig.enableTransition = false;
        _lightboxConfig.wrapAround = true;
        _lightboxConfig.showImageNumberLabel = true;
        _lightboxConfig.showZoom = true;
        _lightboxConfig.showRotate = true;
        _lightboxConfig.albumLabel = '%1 of %2';
        _lightboxConfig.positionFromTop = 0;
        _lightboxConfig.disableScrolling = true;
    }

    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }

    open(index: number): void {
        // open lightbox
        this._lightbox.open(this.items, index);
    }
}
