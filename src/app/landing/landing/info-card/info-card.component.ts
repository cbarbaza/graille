import { Component, OnInit } from '@angular/core';
import { cardsInfo, IInfoCard } from 'src/app/data/info-card.interface';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  public cards: IInfoCard[] = cardsInfo;

  constructor() { }

  ngOnInit() {
  }

}
