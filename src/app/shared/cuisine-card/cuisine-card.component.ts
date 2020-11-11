import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisine-card',
  templateUrl: './cuisine-card.component.html',
  styleUrls: ['./cuisine-card.component.scss'],
})
export class CuisineCardComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  description = '';

  constructor() { }

  ngOnInit(): void {
  }

}
