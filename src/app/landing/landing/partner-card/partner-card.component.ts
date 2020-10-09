import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IPartnerCard, partners } from 'src/app/data/partner-card.interface';

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss']
})
export class PartnerCardComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  public partners: IPartnerCard[] = partners;
  private static PATH_PARTNER_LOGO: string = "assets/images/partner-logo/";

  ngOnInit() {
  }

  getPartnerLogo(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${PartnerCardComponent.PATH_PARTNER_LOGO}${image})`);
  }

}
