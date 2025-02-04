import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
import { Store } from '@ngrx/store';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './event-concert.html',
})
export class EventComponent {
    storeData: any;
    activeTab = 'all-events';
    items = [
        { src: '/assets/images/event-concert/gallery1.jpg', thumb: '/assets/images/event-concert/gallery1.jpg' },
        { src: '/assets/images/event-concert/gallery2.jpg', thumb: '/assets/images/event-concert/gallery2.jpg' },
        { src: '/assets/images/event-concert/gallery3.jpg', thumb: '/assets/images/event-concert/gallery3.jpg' },
        { src: '/assets/images/event-concert/gallery4.jpg', thumb: '/assets/images/event-concert/gallery4.jpg' },
        { src: '/assets/images/event-concert/gallery5.jpg', thumb: '/assets/images/event-concert/gallery5.jpg' },
        { src: '/assets/images/event-concert/gallery6.jpg', thumb: '/assets/images/event-concert/gallery6.jpg' },
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
    open(img: string): void {
        // open lightbox
        const index = this.items.findIndex((d) => d.src.toLowerCase().includes(img.toLowerCase()));
        this._lightbox.open(this.items, index);
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
