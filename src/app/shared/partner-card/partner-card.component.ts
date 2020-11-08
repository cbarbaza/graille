import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IPartnerCard } from 'src/app/data/partner-card.interface';
import { PATH_PARTNER_LOGO } from 'src/app/service/GrailleConst';
import { PartnerService } from 'src/app/service/partner/partner.service';

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss'],
})
export class PartnerCardComponent implements OnInit {

  constructor(public partnersService: PartnerService) { }

  public partners: IPartnerCard[] = [];

  ngOnInit() {
    this.partnersService.getPartners().subscribe(partners => this.partners = partners);
  }


}
