import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { IPartnerCard, SocialLink } from 'src/app/data/partner-card.interface';
import { STORAGE_PARTNER_LOGO_PATH } from 'src/app/service/FireBaseConst';
import { ICON_FACEBOOK, ICON_INSTAGRAM, ICON_LINKEDIN, ICON_WEBSITE } from 'src/app/service/GrailleConst';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.scss'],
})
export class PartnerFormComponent extends SimpleModalComponent<IPartnerCard, IPartnerCard> implements IPartnerCard, OnInit {

  partnerForm: FormGroup;

  logo: string;
  name: string;
  description: string;
  links: SocialLink[];

  private link: string;
  private facebook: string;
  private instagram: string;
  private linkedin: string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private formBuilder: FormBuilder, private afStorage: AngularFireStorage,) {
    super();
  }

  ngOnInit(): void {

    this.indivudalizedLink();

    this.partnerForm = this.formBuilder.group({
      logo: this.logo || '',
      name: this.name  || '',
      description: this.description  || '',
      link: this.link || '',
      facebook: this.facebook || '',
      instagram: this.instagram || '',
      linkedin: this.linkedin || '',
    });
  }

  indivudalizedLink(){
    this.links.forEach((socialLink) => {
      if(ICON_WEBSITE === socialLink.iconName){
        this.link = socialLink.url;
      }

      if(ICON_FACEBOOK === socialLink.iconName){
        this.facebook = socialLink.url;
      }

      if(ICON_INSTAGRAM === socialLink.iconName){
        this.instagram = socialLink.url;
      }

      if(ICON_LINKEDIN === socialLink.iconName){
        this.linkedin = socialLink.url;
      }
    });
  }

  async onFileSelected(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(`${STORAGE_PARTNER_LOGO_PATH}/${id}`);
    this.task = this.ref.put(event.target.files[0]);

    const uploadPercent = this.task.percentageChanges();

    // upload image, save url
    await this.task;
    console.log('Image uploaded!');
    await this.ref.getDownloadURL().toPromise().then(url => {this.logo = url; console.log(url);});

  }

  apply(formValue) {
    const links = [];

    if(formValue.link.length > 0){
      links.push({
        iconName: ICON_WEBSITE,
        url: formValue.link,
      });
    }

    if(formValue.facebook.length > 0){
      links.push({
        iconName: ICON_FACEBOOK,
        url: formValue.facebook,
      });
    }

    if(formValue.instagram.length > 0){
      links.push({
        iconName: ICON_INSTAGRAM,
        url: formValue.instagram,
      });
    }

    if(formValue.linkedin.length > 0){
      links.push({
        iconName: ICON_LINKEDIN,
        url: formValue.linkedin,
      });
    }

    const newPartner: IPartnerCard = {
      logo: this.logo || '',
      name: formValue.name,
      description: formValue.description,
      links,
    };

    this.result = newPartner;
    this.close();
  }

}
