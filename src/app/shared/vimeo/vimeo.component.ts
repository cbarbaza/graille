import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.scss']
})
export class VimeoComponent implements OnInit {

  @Input()
  public vimeoId: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  generateVimeoLink() {
    // return `https://player.vimeo.com/video/${this.vimeoId}?title=0&byline=0&portrait=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${this.vimeoId}?title=0&byline=0&portrait=0`);
  }

}
