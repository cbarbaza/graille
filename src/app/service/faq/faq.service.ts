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

  // /!\ BELOW FUNCTION NOT TESTED ! /!\
  saveFaq() {
    firebase.database().ref('/faq').set(this.cardsInfo);
  }

  getSingleFaq(id: number) {
    return new Promise((resolve, reject) => {
      firebase.database().ref(`${DB_NODE_FAQ}/id`).once('value').then(
        (data: DataSnapshot) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
        );
      }
    );
  }

  createNewQuestion(newInfoCard: IInfoCard) {
    this.cardsInfo.push(newInfoCard);
    this.saveFaq();
    this.emitFaq();
  }

  removeQuestion(question: IInfoCard) {
    const questionIndexToRemove = this.cardsInfo.findIndex(
      (questionEL) => {
        if(questionEL === question) {
          return true;
        }
      }
    );
    this.cardsInfo.splice(questionIndexToRemove, 1);
    this.saveFaq();
    this.emitFaq();
  }
}
