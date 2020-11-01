
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SimpleModalService } from 'ngx-simple-modal';
import { Observable } from 'rxjs';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { PATH_PARTNER_LOGO } from 'src/app/service/GrailleConst';
import { PartnerService } from 'src/app/service/partner/partner.service';
import { ConfirmationDialogComponent } from 'src/app/shared/dialog/confirmation-dialog/confirmation-dialog.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';

@Component({
  selector: 'app-admin-partner',
  templateUrl: './admin-partner.component.html',
  styleUrls: ['./admin-partner.component.scss'],
})
export class AdminPartnerComponent implements OnInit {

  public partners: Observable<IPartnerCard[]>;
  public workingPartner$;


  constructor(private sanitizer: DomSanitizer,
              private partnersService: PartnerService,
              private simpleModalService:SimpleModalService) { }

  ngOnInit() {
    this.partners = this.partnersService.partners;
  }

  getPartnerLogo(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${PATH_PARTNER_LOGO}${image})`);
  }

  showConfirmDelete(partnerId: string, partnerName: string) {
    const confirmModel = {
      title: 'Suppression d\'un partenaire',
      message: `Etes vous sur de vouloir suprimmer le partenanire ${partnerName} ? `,
    };

    const disposable = this.simpleModalService.addModal(ConfirmationDialogComponent, confirmModel)
    .subscribe((confirm)=>{
      if(confirm){
        this.partnersService.removePartner(partnerId);
      }
    });
  }

  showAdd(partnerId: string){
    if(partnerId !== null){
        this.workingPartner$ = this.partnersService.getPartner(partnerId).subscribe(res => {
          this.workingPartner$.unsubscribe();
          this.openPopUpAdd(res, partnerId);
      });
    } else {
      this.openPopUpAdd({
        logo: null,
        name: null,
        description: null,
        links: [],
      }, null);
    }
  }

    openPopUpAdd(partner: IPartnerCard, partnerId: string){
    const disposable = this.simpleModalService.addModal(PartnerFormComponent, partner)
    .subscribe((newPartner)=>{
      if(newPartner){
        if(partnerId === null){
          this.partnersService.addPartner(newPartner);
        } else {
          this.partnersService.updatePartner(partnerId, newPartner);
        }
      }
    });
  }
}
