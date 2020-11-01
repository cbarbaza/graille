import { Component, OnDestroy, OnInit } from '@angular/core';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { FaqService } from 'src/app/service/faq/faq.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit, OnDestroy {

  public cards: IInfoCard[] = [];

  constructor(private faqService: FaqService) {
  }
  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.faqService.getFaqs().subscribe(faqs => {
      this.cards = faqs;
    });
  }

}
