import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface ConfirmModel {
  title:string;
  message:string;
  yesLabel?: string ;
  noLabel?: string ;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel{
  title: string;
  message: string;
  yesLabel: string;
  noLabel: string;

  constructor() {
    super();
  }

  confirm() {
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.result = true;
    this.close();
  }
  cancel() {
    this.result = false;
    this.close();
  }
}
