import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { FaqService } from 'src/app/service/faq/faq.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {

  public cards: IInfoCard[] = [];
  cardsSubscription: Subscription;


  constructor(private faqService: FaqService) {
  }

  ngOnInit() {
    this.faqService.cardsInfoSubject.subscribe((infoCards: IInfoCard[]) => this.cards = infoCards);
    this.faqService.emitFaq();
  }

}
