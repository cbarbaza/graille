import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery-9';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '50vh',
        imageInfinityMove: true,
        imageBullets: true,
        thumbnails: false,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsMargin: 5,
        thumbnailMargin: 5,
        preview: false,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        // previewAutoPlay: false,
        // previewCloseOnEsc: true,
        // imageArrowsAutoHide: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 5,
        thumbnailMargin: 5,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/landing/gallery/bocal-qui-met-bien.jpeg',
        medium: 'assets/images/landing/gallery/bocal-qui-met-bien.jpeg',
        big: 'assets/images/landing/gallery/bocal-qui-met-bien.jpeg',
      },
      {
        small: 'assets/images/landing/gallery/header-bg.jpg',
        medium: 'assets/images/landing/gallery/header-bg.jpg',
        big: 'assets/images/landing/gallery/header-bg.jpg',
      },
      {
        small: 'assets/images/landing/gallery/livraison-2.jpeg',
        medium: 'assets/images/landing/gallery/livraison-2.jpeg',
        big: 'assets/images/landing/gallery/livraison-2.jpeg',
      },
      {
        small: 'assets/images/landing/gallery/livraison-1.jpeg',
        medium: 'assets/images/landing/gallery/livraison-1.jpeg',
        big: 'assets/images/landing/gallery/livraison-1.jpeg',
      },

      {
        small: 'assets/images/landing/gallery/local-1.jpeg',
        medium: 'assets/images/landing/gallery/local-1.jpeg',
        big: 'assets/images/landing/gallery/local-1.jpeg',
      },
      {
        small: 'assets/images/landing/gallery/tablier-1.jpeg',
        medium: 'assets/images/landing/gallery/tablier-1.jpeg',
        big: 'assets/images/landing/gallery/tablier-1.jpeg',
      },
    ];
  }

}
