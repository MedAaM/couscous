import { Component } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
    moduleId: module.id,
    templateUrl: './hotel-resort.html',
})
export class HotelResortComponent {
    activeTab = 'cozy-room';
    items = [
        { src: '/assets/images/hotel-resort/room1.jpg', thumb: '/assets/images/hotel-resort/room1.jpg', type: 'delux-room' },
        { src: '/assets/images/hotel-resort/room2.jpg', thumb: '/assets/images/hotel-resort/room2.jpg', type: 'delux-room' },
        { src: '/assets/images/hotel-resort/room3.jpg', thumb: '/assets/images/hotel-resort/room3.jpg', type: 'cozy-room' },
        { src: '/assets/images/hotel-resort/room4.jpg', thumb: '/assets/images/hotel-resort/room4.jpg', type: 'family-suit' },
        { src: '/assets/images/hotel-resort/room5.jpg', thumb: '/assets/images/hotel-resort/room5.jpg', type: 'family-suit' },
        { src: '/assets/images/hotel-resort/room6.jpg', thumb: '/assets/images/hotel-resort/room6.jpg', type: 'modern-room' },
    ];
    constructor(private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig) {
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
        const index = this.getItems().findIndex((d) => d.src.toLowerCase().includes(img.toLowerCase()));
        this._lightbox.open(this.getItems(), index);
    }
    getItems() {
        if (this.activeTab.toLowerCase() === 'cozy-room') {
            return this.items;
        }
        const imgs = this.items.filter((d) => d.type.toLowerCase() === this.activeTab.toLowerCase()) || [];
        return imgs;
    }
}
