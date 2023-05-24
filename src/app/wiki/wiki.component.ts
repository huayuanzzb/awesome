import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {

  blogUrlSafe;

  constructor(
    public sanitizer: DomSanitizer,
    @Inject(APP_BASE_HREF) private baseHref: string
  ){
    const basePath = 'https://recaton.github.io/awesome/docs';
    this.blogUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(basePath);
  }

}
