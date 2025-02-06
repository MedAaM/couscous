import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';


@Component({
    moduleId: module.id,
    templateUrl: './about-us.html',
})
export class AboutUsComponent {
    storeData: any;
    items = [
        { src: '/assets/images/restaurent/gal1.jpg', thumb: '/assets/images/restaurent/gal1.jpg' },
        { src: '/assets/images/restaurent/gal2.jpg', thumb: '/assets/images/restaurent/gal2.jpg' },
        { src: '/assets/images/restaurent/gal3.jpg', thumb: '/assets/images/restaurent/gal3.jpg' },
        { src: '/assets/images/restaurent/gal4.jpg', thumb: '/assets/images/restaurent/gal4.jpg' },
        { src: '/assets/images/restaurent/gal5.jpg', thumb: '/assets/images/restaurent/gal5.jpg' },
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
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
    open(index: number): void {
        // open lightbox
        this._lightbox.open(this.items, index);
    }
}
