import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { Observable } from 'rxjs';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { FaqService } from 'src/app/service/faq/faq.service';
import { ConfirmationDialogComponent } from 'src/app/shared/dialog/confirmation-dialog/confirmation-dialog.component';
import { FAQFormComponent } from './faqform/faqform.component';


@Component({
  selector: 'app-admin-faq',
  templateUrl: './admin-faq.component.html',
  styleUrls: ['./admin-faq.component.scss'],
})
export class AdminFAQComponent implements OnInit {

  public cards: Observable<IInfoCard[]>;
  public workingCard$;


  constructor(private faqService: FaqService,
    private simpleModalService:SimpleModalService) { }

  ngOnInit() {
    this.cards = this.faqService.faqs;
  }

  showConfirmDelete(cardId: string, cardTitle: string) {
    const confirmModel = {
      title: 'Suppression d\'une question',
      message: `Etes vous sur de vouloir suprimmer la question "${cardTitle} ?" `,
    };

    const disposable = this.simpleModalService.addModal(ConfirmationDialogComponent, confirmModel)
    .subscribe((confirm)=>{
      if(confirm){
        this.faqService.removeQuestion(cardId);
      }
    });
  }

  showAdd(questionId: string){
      if(questionId !== null){
         this.workingCard$ = this.faqService.getFaq(questionId).subscribe(res => {
            this.workingCard$.unsubscribe();
            this.openPopUpAdd(res, questionId);
        });
      } else {
        this.openPopUpAdd({
          title: null,
          titleIcon: null,
          text: null,
        }, null);
      }
  }

  openPopUpAdd(card: IInfoCard, questionId: string){
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
