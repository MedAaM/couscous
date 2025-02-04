import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './gym.html',
})
export class GymComponent {
    storeData: any;
    constructor(public store: Store<any>) {
        this.initStore();
    }

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
