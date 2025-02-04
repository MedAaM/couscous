import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { Store } from '@ngrx/store';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    templateUrl: './consulting.html',
})
export class ConsultingComponent {
    storeData: any;
    constructor(public store: Store<any>) {
        this.initStore();
    }

    config: SwiperOptions = {
        loop:true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.testimonial-swiper-button-next',
            prevEl: '.testimonial-swiper-button-prev',
        },
        modules: [Navigation, Autoplay],
    };

    @Input() showTitle: boolean = true;
    @Input() queries: any = [
        {
            id: 1,
            question: 'Are your service easy to use?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.',
        },
        {
            id: 2,
            question: 'Will i receive future updates?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
        },
        {
            id: 3,
            question: 'Is this services work in my country?',
            answer: ' mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
        },
        {
            id: 4,
            question: 'How much I will pay?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod',
        },
    ];
    @Input() type: string = 'faq';

    index: number = 0;
    ngOnInit() {
        setTimeout(() => {
            const ele = document.querySelectorAll<HTMLElement>('.accordion button');
            if (ele.length) {
                ele[0].click();
            }
        });
    }
    toggleAccordion(event: any, i: number) {
        const isOpen = this.index === i;
        const ele = document.querySelectorAll<HTMLElement>('.accordion-content');
        for (let i = 0; i < ele.length; i++) {
            ele[i].style.maxHeight = '';
        }

        const element = event.currentTarget;
        element.classList.toggle('active');
        const panel = element.nextElementSibling;
        if (panel) {
            if (isOpen) {
                this.index = 0;
                panel.style.maxHeight = '';
            } else {
                this.index = i;
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }
    }

    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
