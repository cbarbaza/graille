import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SimpleModalService } from 'ngx-simple-modal';
import { Subscription } from 'rxjs';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { PATH_PARTNER_LOGO } from 'src/app/service/GrailleConst';
import { PartnerService } from 'src/app/service/partner/partner.service';
import { ConfirmationDialogComponent } from 'src/app/shared/dialog/confirmation-dialog/confirmation-dialog.component';
import { PartnerCardComponent } from 'src/app/shared/partner-card/partner-card.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';

@Component({
  selector: 'app-admin-partner',
  templateUrl: './admin-partner.component.html',
  styleUrls: ['./admin-partner.component.scss'],
})
export class AdminPartnerComponent implements OnInit {

  public partners: IPartnerCard[] = [];
  partnersSubscription: Subscription;

  constructor(private sanitizer: DomSanitizer,
              private partnersService: PartnerService,
              private simpleModalService:SimpleModalService) { }

  ngOnInit() {
    this.partnersService.partnersSubject.subscribe((partners: IPartnerCard[]) => this.partners = partners);
    this.partnersService.emitPartners();
  }

  getPartnerLogo(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${PATH_PARTNER_LOGO}${image})`);
  }

  showConfirmDelete(partnerId: string) {
    const confirmModel = {
      title: 'Suppression d\'un partenaire',
      message: `Etes vous sur de vouloir suprimmer le partenanire ${this.partners[partnerId].name} ? `,
    };

    const disposable = this.simpleModalService.addModal(ConfirmationDialogComponent, confirmModel)
    .subscribe((confirm)=>{
      if(confirm){
        this.partnersService.removePartner(partnerId);
      }
    });
  }

  showAdd(id: string){
    let partner: IPartnerCard = null;
      if(id !== null){
        partner = this.partners[id];
      } else {
        partner = {
          logo: null,
          name: null,
          description: null,
          links: [],
        };
      }

    const disposable = this.simpleModalService.addModal(PartnerFormComponent, partner)
    .subscribe((newPartner)=>{
      if(newPartner){
        if(id === null){
          this.partnersService.addPartner(newPartner);
        } else {
          this.partnersService.updatePartner(id, newPartner);
        }
      }
    });
  }
}
