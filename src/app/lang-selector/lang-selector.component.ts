import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {

  langs = [
    {
      code: 'zh',
      viewValue: '中文'
    },{
      code: 'en-US',
      viewValue: 'English'
    },
  ];

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string,
    @Inject(APP_BASE_HREF) private baseHref: string,
    ) {
    }

  ngOnInit(): void {
  }
  
  onChangeLang(langCode: string) {
    this.activeLocale = langCode;
    localStorage.setItem('selectedLang', langCode);
    const basePath = this.baseHref == '/' ? '' : this.baseHref.split('/')[0] + '/' + this.baseHref.split('/')[1];
    window.location.href = `${window.location.protocol}//${window.location.host}${basePath}/${this.activeLocale}`;
  }

}
