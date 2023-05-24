import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styles: [
    `
      .blog {
        width: "100%";
        height="100%" - 64px
      }
    `

  ]
})
export class WikiComponent {

  blogUrlSafe;

  constructor(
    public sanitizer: DomSanitizer,
    @Inject(APP_BASE_HREF) private baseHref: string
  ){
    const basePath = this.baseHref == '/' ? '' : this.baseHref.split('/')[0] + '/' + this.baseHref.split('/')[1];
    this.blogUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(`${window.location.protocol}//${window.location.host}${basePath}/docs`);
  }

}
