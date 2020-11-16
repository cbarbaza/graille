import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { DB_NODE_PARTNERS } from '../FireBaseConst';
import { PATH_PARTNER_LOGO } from '../GrailleConst';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {

  partnersRef: AngularFireList<any>;
  partners: Observable<any[]>;

  constructor(public sanitizer: DomSanitizer, public db: AngularFireDatabase) {
    this.partnersRef = db.list<IPartnerCard>(DB_NODE_PARTNERS);
    // Use snapshotChanges().map() to store the key
    this.partners = this.partnersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }


  getPartnerLogo(image) {
    if(!image) {return;}

    if(image.startsWith('https://firebasestorage.googleapis.com')){
     return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    }
    return this.sanitizer.bypassSecurityTrustStyle(`url(${PATH_PARTNER_LOGO}${image})`);
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
