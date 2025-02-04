import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './modern-saas.html',
})
export class ModernSaasComponent {
    storeData: any;
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
    @Input() faqs: any = [
        {
            id: 1,
            question: 'Do you offer a free trial?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            question: 'How do I create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            question: 'What protections does Strategic Systems use to protect our data?',
            answer: "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
        },
        {
            id: 4,
            question: 'What type of support is included with this Service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 6,
            question: 'Who else is using plurk SaaS tool?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];
    blogs = [
        {
            id: 1,
            thumbnail: '/assets/images/modern-saas/design.png',
            title: '3 experiments to improve your mobile app funnel',
            excerpt: 'Funnels don’t just provide you with conversion numbers, they provide you with insight into how your users behave.',
            date: 'Dec 15, 2022',
            tag: 'Design',
        },
        {
            id: 2,
            thumbnail: '/assets/images/modern-saas/marketing.png',
            title: 'What’s growth hacking? 8 great books to learn more about it',
            excerpt: 'The use of resource-light and cost-effective digital marketing tactics to help grow and retain an active user base, sell products and...',
            date: 'Dec 25, 2022',
            tag: 'Marketing',
        },
        {
            id: 3,
            thumbnail: '/assets/images/modern-saas/integration.png',
            title: '6 new interesting mobile apps to grow your audience on',
            excerpt: 'Before I get into the advice, here’s a bit about my background and experience with growing audiences for creative work.',
            date: 'Nov 06, 2022',
            tag: 'Integration',
        },
    ];
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
