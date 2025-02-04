import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { ModalDialog } from './components/modal-dialog';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';


// install Swiper modules
SwiperCore.use([Autoplay]);




@Component({
    moduleId: module.id,
    templateUrl: './restaurant.html',
})
export class RestaurantComponent {
    storeData: any;
    showMorePacks: boolean = false; // Contrôle l'affichage des packs supplémentaires

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

    packs = [
        {
          recettes: '12 recettes',
          price: '299.00 TND',
          duration: 'une seule fois',
          title: 'Pack ELNebli',
          description: 'Un couscous authentique aux saveurs méditerranéennes, relevé d’épices fines.',
          image: '/assets/images/restaurent/plan-1.png',
        },
        {
          recettes: '7 recettes',
          price: '199.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Sfaxi',
          description: 'Le bon couscous sfaxien, riche en traditions et arômes envoûtants.',
          image: '/assets/images/restaurent/plan-2.png',
        },
        {
          recettes: '4 recettes',
          price: '149.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Sehli',
          description: 'Un couscous aux épices locales, doux et authentique, typique de la région.',
          image: '/assets/images/restaurent/plan-3.png',
        },
        {
          recettes: '3 recettes',
          price: '129.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Karouid',
          description: 'Un mariage parfait de tradition et de saveurs épicées pour les palais raffinés.',
          image: '/assets/images/restaurent/plan-4.png',
        },
        {
          recettes: '2 recettes',
          price: '99.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Gafsi',
          description: 'Un couscous généreux, symbole de convivialité et de partage tunisien.',
          image: '/assets/images/restaurent/plan-5.png',
        },
        {
          recettes: '1 recette',
          price: '79.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Benzarti',
          description: 'Une explosion de saveurs avec un couscous aux textures surprenantes.',
          image: '/assets/images/restaurent/plan-6.png',
        },
        {
          recettes: '12 recettes',
          price: '299.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Mednini',
          description: 'L’équilibre parfait entre tradition et modernité dans chaque bouchée.',
          image: '/assets/images/restaurent/plan-1.png',
        },
        {
          recettes: '12 recettes',
          price: '299.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Bouzidi',
          description: 'Un couscous raffiné, riche en héritage culinaire tunisien et en caractère.',
          image: '/assets/images/restaurent/plan-1.png',
        },
        {
          recettes: '12 recettes',
          price: '299.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Gbelewi',
          description: 'Un mélange d’arômes typiques offrant une expérience authentique du couscous.',
          image: '/assets/images/restaurent/plan-1.png',
        },
        {
          recettes: '12 recettes',
          price: '299.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Jandoubi',
          description: 'La quintessence du couscous tunisien, généreux et épicé pour les fins gourmets.',
          image: '/assets/images/restaurent/plan-1.png',
        },
        {
          recettes: '12 recettes',
          price: '299.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Gabsi',
          description: 'Une explosion de saveurs traditionnelles, raffinée et authentique.',
          image: '/assets/images/restaurent/plan-1.png',
        },
        {
          recettes: '12 recettes',
          price: '299.00 TND',
          duration: 'une seule fois',
          title: 'Pack El Zagweni',
          description: 'Un hommage aux traditions tunisiennes, authentique et parfumé à souhait.',
          image: '/assets/images/restaurent/plan-1.png',
        },
      ];
      
      items = [
        { src: '/assets/images/event-concert/gallery1.jpg', thumb: '/assets/images/event-concert/gallery1.jpg' },
        { src: '/assets/images/event-concert/gallery2.jpg', thumb: '/assets/images/event-concert/gallery2.jpg' },
        { src: '/assets/images/event-concert/gallery3.jpg', thumb: '/assets/images/event-concert/gallery3.jpg' },
        { src: '/assets/images/event-concert/gallery4.jpg', thumb: '/assets/images/event-concert/gallery4.jpg' },
        { src: '/assets/images/event-concert/gallery5.jpg', thumb: '/assets/images/event-concert/gallery5.jpg' },
        { src: '/assets/images/event-concert/gallery6.jpg', thumb: '/assets/images/event-concert/gallery6.jpg' },
    ];
      

    config: SwiperOptions = {
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
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 7,
            },
        },
    };

    constructor(public store: Store<any> ,private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
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
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
    togglePacks() {
        this.showMorePacks = !this.showMorePacks;
      }
    
}
