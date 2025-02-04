import { Component, Input } from '@angular/core';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);


@Component({
    moduleId: module.id,
    templateUrl: './portfolio-landing.html',
})
export class PortfolioLandingComponent {
    storeData: any;
    activeTab = 'all';
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
}
