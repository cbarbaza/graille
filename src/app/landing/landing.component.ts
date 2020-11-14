import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Gallery, GalleryConfig, GalleryItem, ImageItem } from 'ng-gallery';
import { RemoteConfigService } from '../service/remoteConfig/remote-config.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, AfterViewInit {

  static GALLERY_HEADER_NAME = 'headerGallery';

  config: GalleryConfig = {
      thumb: false,
      loop: true,
      autoPlay: true,
      dots: true,
      counter: false,
      imageSize: 'cover',
  };

  galleryRef;
  countersConfig = {};

  constructor(private gallery: Gallery, private remoteConfigService: RemoteConfigService) { }

  ngOnInit() {

    // Get the gallery reference by id, default: 'root'
    this.galleryRef = this.gallery.ref(LandingComponent.GALLERY_HEADER_NAME);

    this.galleryRef.load([
      new ImageItem({ src: 'assets/images/landing/gallery/bocal-qui-met-bien.jpeg', }),
      new ImageItem({ src: 'assets/images/landing/gallery/header-bg.jpg', }),
      new ImageItem({ src: 'assets/images/landing/gallery/livraison-2.jpeg', }),
      new ImageItem({ src: 'assets/images/landing/gallery/livraison-1.jpeg', }),
      new ImageItem({ src: 'assets/images/landing/gallery/local-1.jpeg', }),
      new ImageItem({ src: 'assets/images/landing/gallery/tablier-1.jpeg', }),
      // ... more items
    ]);


    this.remoteConfigService.getCounters().subscribe(res => {
      console.log(res);
      this.countersConfig = res;});
  }

  ngAfterViewInit(): void {
    this.galleryRef.setConfig(this.config);
  }


}
