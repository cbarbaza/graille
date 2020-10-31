import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { DB_NODE_PARTNERS } from '../FireBaseConst';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {

  partnersRef: AngularFireList<any>;
  partners: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.partnersRef = db.list<IPartnerCard>(DB_NODE_PARTNERS);
    // Use snapshotChanges().map() to store the key
    this.partners = this.partnersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getPartners() {
    return this.db.list<IPartnerCard>(DB_NODE_PARTNERS).valueChanges();
  }

  getPartner(partnerId: string){
    return this.db.object<IPartnerCard>(`${DB_NODE_PARTNERS}/${partnerId}`).valueChanges();
  }

  addPartner(newPartner: IPartnerCard) {
    this.db.list(DB_NODE_PARTNERS).push(newPartner);
  }

  removePartner(partnerId: string){
    this.db.list(DB_NODE_PARTNERS).remove(partnerId);
  }

  updatePartner(partnerId: string, newPartner: IPartnerCard){
    this.db.list(DB_NODE_PARTNERS).update(partnerId, newPartner);
  }
}
