import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html'
})
export class WikiComponent {

  blogSrc = "";

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string
  ){
    const basePath = this.baseHref == '/' ? '' : this.baseHref.split('/')[0] + '/' + this.baseHref.split('/')[1];
    this.blogSrc = `${window.location.protocol}//${window.location.host}${basePath}/docs`;
  }

}
