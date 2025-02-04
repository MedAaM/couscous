import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: './header.html',
})
export class HeaderComponent {
    storeData: any;
    showMenu = false;
    showSearch = false;
    constructor(public store: Store<any>, public router: Router) {
        this.initStore();
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }

    // Mobile menu js
    toggleMenu() {
        if (window.innerWidth < 1024) {
            this.showMenu = !this.showMenu;
        } else {
            this.showMenu = false;
        }
    }

    // Search Bar - Header
    toggleSearch() {
        this.showSearch = !this.showSearch;
    }
}
