import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { IInfoCard } from 'src/app/data/info-card.interface';
import { EDITOR_CONFIG } from 'src/app/service/EditorConfig';

@Component({
  selector: 'app-faqform',
  templateUrl: './faqform.component.html',
  styleUrls: ['./faqform.component.scss'],
})
export class FAQFormComponent extends SimpleModalComponent<IInfoCard, IInfoCard> implements IInfoCard, OnInit {

  faqForm: FormGroup;

  editorConfig = EDITOR_CONFIG;

  title: string;
  titleIcon: string;
  text: string;

  constructor(private formBuilder: FormBuilder,) {
    super();
   }

  ngOnInit(): void {
    this.faqForm = this.formBuilder.group({
      title: this.title || '',
      titleIcon: this.titleIcon  || '',
      text: this.text  || '',
    });
  }

  apply(formValue) {

    const newQuestion: IInfoCard = {
      title: formValue.title,
      titleIcon: formValue.titleIcon,
      text: formValue.text,
    };

    this.result = newQuestion;
    this.close();
  }

}
