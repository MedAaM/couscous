import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    selector: 'testimonial',
    templateUrl: './testimonial.html',
})
export class TestimonialComponent {
    @Input() mainClass: string = '';
    @Input() showTitle: boolean = true;
    @Input() type: string = 'common';
    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'Naziha Darouich',
            role: 'Membre de l\'Academy',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "Application incroyable ! 😍📲 J’ai appris à préparer le vrai couscous tunisien avec des recettes détaillées et faciles à suivre 🍲🇹🇳. Les formations sont très bien expliquées et super utiles 👩‍🍳💡. En plus, l’interface est fluide et agréable à utiliser ! 👌✨ Je recommande à 100% 🔥👏",
        },
        {
            id: 2,
            name: 'Amina bent elqich',
            role: 'Membre de l\'Academy',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "Application top ! 😍📱 J’adore les recettes de couscous tunisien, elles sont super détaillées et les étapes sont claires 🍲🇹🇳. Grâce aux formations, j’ai appris de nouvelles techniques de cuisine et j’ai pu améliorer mes plats 👩‍🍳💡. L'interface est super simple à utiliser, et il y a toujours une recette pour chaque occasion 🎉🎈. Je suis fan ! 🤩👏 Hâte de découvrir encore plus de recettes et astuces. Je recommande vivement à tous les amoureux de la cuisine tunisienne ! 😋",
        },
        {
            id: 3,
            name: 'hamdi eluch',
            role: 'Membre de l\'Academy',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "Application exceptionnelle ! 😍📲 J’ai toujours rêvé de maîtriser le couscous tunisien et grâce à cette app, j'ai enfin réussi 🍲🇹🇳. Les recettes sont bien expliquées, les vidéos sont claires et faciles à suivre 🎥🍴. Les formations sont super intéressantes et m'ont permis d'améliorer mes techniques culinaires 👨‍🍳💡. En plus, l'app est super ergonomique et agréable à utiliser ✨. Ce que j’aime particulièrement, c’est qu’il y a des astuces et des variantes pour chaque recette, ce qui permet de personnaliser les plats selon les goûts de chacun 🧑‍🍳💖. Je suis ravie et je recommande vivement à tous ceux qui aiment la cuisine tunisienne et veulent apprendre à la perfectionner ! 😋",
        },
    ];
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
            nextEl: '.testimonial-swiper-button-next',
            prevEl: '.testimonial-swiper-button-prev',
        },
        modules: [Navigation, Autoplay],
    };
    constructor() {}
}
