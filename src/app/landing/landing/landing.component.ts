import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }


  public slides = [
    { src: "450886047" },
    { src: "450886047" },
    { src: "450886047" },
    { src: "450886047" }
  ];

  ngOnInit() {
  }

}
