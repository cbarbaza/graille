import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/internal/Subject';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { DB_NODE_FAQ } from '../FireBaseConst';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root',
})
export class FaqService {

  cardsInfo: IInfoCard[] = [];
  cardsInfoSubject = new Subject<IInfoCard[]>();

  constructor() {
    this.getFaqs();
  }

  emitFaq() {
    this.cardsInfoSubject.next(this.cardsInfo);
  }

  getFaqs() {
    firebase.database().ref(DB_NODE_FAQ)
    .on('value', (data: DataSnapshot) => {
      this.cardsInfo = data.val() ? data.val() : [];
      this.emitFaq();
    });
  }

  addQuestion(newQuestion: IInfoCard) {
    firebase.database().ref(DB_NODE_FAQ).push().set(newQuestion);
  }

  removeQuestion(questionId: string){
    firebase.database().ref(`${DB_NODE_FAQ}/${questionId}`).remove();
  }

  updateQuestion(questionId: string, newQuestion: IInfoCard){
    firebase.database().ref(`${DB_NODE_FAQ}/${questionId}`).update(newQuestion);
  }
}
