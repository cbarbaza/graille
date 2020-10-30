import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ConfirmationDialogComponent } from 'src/app/shared/dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private  authService:  AuthService, private simpleModalService:SimpleModalService) { }

  ngOnInit(): void {}

  showConfirm() {
    console.log('confir');
    const disposable = this.simpleModalService.addModal(ConfirmationDialogComponent, {
      title: 'Confirm title',
      message: 'Confirm message',
      noLabel: 'nopnop',
      yesLabel: 'yepyep',
    })
    .subscribe((isConfirmed)=>{
      // We get modal result
      if(isConfirmed) {
        alert('accepted');
      }
      else {
        alert('declined');
      }
    });
    // // We can close modal calling disposable.unsubscribe();
    // // If modal was not closed manually close it by timeout
    // setTimeout(()=>{
    //   disposable.unsubscribe();
    // },10000);
  }

}
