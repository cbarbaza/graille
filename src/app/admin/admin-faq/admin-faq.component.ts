import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subscription } from 'rxjs';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { FaqService } from 'src/app/service/faq/faq.service';
import { ConfirmationDialogComponent } from 'src/app/shared/dialog/confirmation-dialog/confirmation-dialog.component';
import { PartnerFormComponent } from '../admin-partner/partner-form/partner-form.component';
import { FAQFormComponent } from './faqform/faqform.component';

@Component({
  selector: 'app-admin-faq',
  templateUrl: './admin-faq.component.html',
  styleUrls: ['./admin-faq.component.scss'],
})
export class AdminFAQComponent implements OnInit {

  public cards: IInfoCard[] = [];
  cardsSubscription: Subscription;

  constructor(private faqService: FaqService,
    private simpleModalService:SimpleModalService) { }

  ngOnInit() {
    this.faqService.cardsInfoSubject.subscribe((infoCards: IInfoCard[]) => this.cards = infoCards);
    this.faqService.emitFaq();
  }

  showConfirmDelete(cardId: string) {
    const confirmModel = {
      title: 'Suppression d\'une question',
      message: `Etes vous sur de vouloir suprimmer la question "${this.cards[cardId].title} ?" `,
    };

    const disposable = this.simpleModalService.addModal(ConfirmationDialogComponent, confirmModel)
    .subscribe((confirm)=>{
      if(confirm){
        this.faqService.removeQuestion(cardId);
      }
    });
  }

  showAdd(questionId: string){
    let card: IInfoCard = null;
      if(questionId !== null){
        card = this.cards[questionId];
      } else {
        card = {
          title: null,
          titleIcon: null,
          text: null,
        };
      }

    const disposable = this.simpleModalService.addModal(FAQFormComponent, card)
    .subscribe((newQuestion)=>{
      if(newQuestion){
        if(questionId === null){
          this.faqService.addQuestion(newQuestion);
        } else {
          this.faqService.updateQuestion(questionId, newQuestion);
        }
      }
    });
  }

}
