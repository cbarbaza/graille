import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vimeo-item',
  templateUrl: './vimeo-item.component.html',
  styleUrls: ['./vimeo-item.component.scss']
})
export class VimeoItemComponent implements OnInit {

  @Input()
  public direction: string; // should be left ort right

  @Input()
  public viemoId: string;

  @Input()
  public date: string;

  @Input()
  public title: string;

  @Input()
  public text = '';

  constructor() { }

  ngOnInit() {
  }

}
