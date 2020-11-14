import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss'],
})
export class ActualiteComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  ngOnInit() {}

  // scroll after view init due to iframe that breaks item location on the page
  ngAfterViewInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.scrollTo(params.get('slug'));
    });
  }

  scrollTo(slug: string){
    if(slug && slug !== ''){
      this.viewportScroller.scrollToAnchor(slug);
    }
  }

}
