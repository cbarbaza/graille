import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BASE_PATH_ACTUALITE } from 'src/app/service/GrailleConst';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit {

  @Input()
  public direction: string; // should be left ort right

  @Input()
  public imagePath: string;

  @Input()
  public date: string;

  @Input()
  public title: string;

  @Input()
  public text = '';

  @Input()
  public slug = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getImage() {
    return `${BASE_PATH_ACTUALITE}${this.imagePath}`;
  }

}
