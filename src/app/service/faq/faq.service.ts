import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { DB_NODE_FAQ } from '../FireBaseConst';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FaqService {

  faqsRef: AngularFireList<any>;
  faqs: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.faqsRef = db.list(DB_NODE_FAQ);
    // Use snapshotChanges().map() to store the key
    this.faqs = this.faqsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getFaqs() {
    return this.db.list<IInfoCard>(DB_NODE_FAQ).valueChanges();
  }

  getFaq(questionId: string){
    return this.db.object<IInfoCard>(`${DB_NODE_FAQ}/${questionId}`).valueChanges();
  }

  addQuestion(newQuestion: IInfoCard) {
    this.db.list(DB_NODE_FAQ).push(newQuestion);
  }

  removeQuestion(questionId: string){
    this.db.list(DB_NODE_FAQ).remove(questionId);
  }

  updateQuestion(questionId: string, newQuestion: IInfoCard){
    this.db.list(DB_NODE_FAQ).update(questionId, newQuestion);
  }
}
