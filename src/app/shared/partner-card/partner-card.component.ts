import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { PATH_PARTNER_LOGO } from 'src/app/service/GrailleConst';
import { PartnerService } from 'src/app/service/partner/partner.service';

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss'],
})
export class PartnerCardComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,
              private partnersService: PartnerService
            ) { }


  public partners: IPartnerCard[] = [];
  partnersSubscription: Subscription;

  ngOnInit() {
    this.partnersService.partnersSubject.subscribe((partners: IPartnerCard[]) => this.partners = partners);
    this.partnersService.emitPartners();
  }

  getPartnerLogo(image) {

    if(image.startsWith('https://firebasestorage.googleapis.com')){
     return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    }

    return this.sanitizer.bypassSecurityTrustStyle(`url(${PATH_PARTNER_LOGO}${image})`);
  }


}
