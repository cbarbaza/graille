import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.scss'],
})
export class ShareButtonsComponent implements OnInit {


  @Input()
  public url = '';

  @Input()
  public title = '';

  @Input()
  public description = '';

  @Input()
  public image = '';

  constructor() { }


  ngOnInit(): void {
  }

}
