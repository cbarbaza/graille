import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { DB_NODE_PARTNERS } from '../FireBaseConst';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root',
})
export class PartnerService {

  partners: IPartnerCard[] = [];
  partnersSubject = new Subject<IPartnerCard[]>();

  constructor() {
    this.getPartners();
  }

  emitPartners() {
    this.partnersSubject.next(this.partners);
  }

  getPartners() {
    firebase.database().ref(DB_NODE_PARTNERS)
    .on('value', (data: DataSnapshot) => {
      this.partners = data.val() ? data.val() : [];
      this.emitPartners();
    }
    );
  }

  addPartner(newPartner: IPartnerCard) {
    firebase.database().ref(DB_NODE_PARTNERS).push().set(newPartner);
  }

  removePartner(partnerId: string){
    firebase.database().ref(`${DB_NODE_PARTNERS}/${partnerId}`).remove();
  }

  updatePartner(partnerId: string, newPartner: IPartnerCard){
    firebase.database().ref(`${DB_NODE_PARTNERS}/${partnerId}`).update(newPartner);
  }
}
