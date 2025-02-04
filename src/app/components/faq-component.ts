import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'faq-component',
    templateUrl: './faq-component.html',
})
export class FaqAccordionComponent {
    @Input() showTitle: boolean = true;
    @Input() queries: any = [
        {
            id: 1,
            question: 'Quand le site sera-t-il en ligne ?',
            answer: ' 📅 Notre site sera disponible très bientôt ! Restez connectés pour ne rien manquer de nos actualités et formations.',
        },
        {
            id: 2,
            question: 'Quels sont vos packs et tarifs ?',
            answer: '💰 Nous proposons plusieurs formules adaptées à vos besoins. Contactez-nous pour découvrir nos offres et choisir celle qui vous convient le mieux !',
        },
        {
            id: 3,
            question: 'Où puis-je vous contacter ?',
            answer: "📍 Vous pouvez nous joindre via notre formulaire de contact sur le site, par e-mail ou sur nos réseaux sociaux.",
        },
        {
            id: 4,
            question: 'Quels types de formations proposez-vous ?',
            answer: '📚 Nous offrons des formations sur l’histoire, la préparation et les secrets du couscous, avec des cours en ligne et des ateliers pratiques.',
        },
        {
            id: 5,
            question: 'Quelles sont vos méthodes de paiement ?',
            answer: '💳 Nous acceptons plusieurs modes de paiement : carte bancaire, virement, Paypal, d17 et paiement en ligne sécurisé.',
        },
        {
            id: 6,
            question: 'Puis-je accéder aux formations depuis mon mobile ?',
            answer: '📱 Oui ! Notre plateforme est optimisée pour tous les appareils, et une application mobile sera bientôt disponible.',
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
}
