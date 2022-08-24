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
  ]

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string,
    @Inject(APP_BASE_HREF) public baseHref: string) { }

  ngOnInit(): void {
  }
  
  onChangeLang() {
    console.log(`baseHref: ${this.baseHref}`)
    const base = this.baseHref ? this.baseHref : '' 
    console.log(`base: ${base}`)
    // window.location.href = `${base}/${this.activeLocale}`;
  }

}
