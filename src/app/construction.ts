import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './construction.html',
})
export class ConstructionComponent {
    items = [
        { src: '/assets/images/construction/project1.jpg', thumb: '/assets/images/construction/project1.jpg', },
        { src: '/assets/images/construction/project2.jpg', thumb: '/assets/images/construction/project2.jpg', },
        { src: '/assets/images/construction/project3.jpg', thumb: '/assets/images/construction/project3.jpg', },
        { src: '/assets/images/construction/project4.jpg', thumb: '/assets/images/construction/project4.jpg', },
        { src: '/assets/images/construction/project5.jpg', thumb: '/assets/images/construction/project5.jpg', },
        { src: '/assets/images/construction/project6.jpg', thumb: '/assets/images/construction/project6.jpg', },
        { src: '/assets/images/construction/project7.jpg', thumb: '/assets/images/construction/project7.jpg', },
        { src: '/assets/images/construction/project8.jpg', thumb: '/assets/images/construction/project8.jpg', },
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

    storeData: any;
    activeTab = 'all';
    config: SwiperOptions = {
        loop:true,
        slidesPerView:4,
        spaceBetween:30,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints:{
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
        navigation:{
            nextEl: '.team-swiper-button-next',
            prevEl: '.team-swiper-button-prev',
        },
        modules:[Navigation, Autoplay],
    };

    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'Jack danver',
            role: 'Patient of cancer',
            thumbnail: '/assets/images/testimonial3.png',
            message:
                'I had a great experience with doctor ralph Edward. His surgery technique is very good. i satisfied with his team members. Thank you!!',
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
