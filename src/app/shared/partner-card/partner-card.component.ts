import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
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
  private static PATH_PARTNER_LOGO = 'assets/images/partner-logo/';

  public partners: IPartnerCard[] = [];
  partnersSubscription: Subscription;

  ngOnInit() {
    console.log('coucou init');
    this.partnersService.partnersSubject.subscribe((partners: IPartnerCard[]) => this.partners = partners);
    this.partnersService.emitPartners();
  }

  getPartnerLogo(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${PartnerCardComponent.PATH_PARTNER_LOGO}${image})`);
  }

}
