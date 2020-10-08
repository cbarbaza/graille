import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { fadeIn, fadeOut, scaleIn, scaleOut } from './carousel.animations';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '1300ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '1300ms' } })]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input()
  slides: [];

  currentSlide: number = 0;


  constructor(private host: ElementRef) { }

  ngOnInit() {
    // setInterval(() => {
    //   this.onNextClick();
    // }, 5000)


    const myObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        console.log('width', entry.contentRect.width);
        console.log('height', entry.contentRect.height);
      });
    });

    const someEl = document.querySelector('.slide');
    myObserver.observe(this.host.nativeElement);
    console.log('coucou', this.host.nativeElement);



  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
