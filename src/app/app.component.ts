import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tools';

  selectedLang = 'en';

  langs = [
    {
      code: 'zh',
      viewValue: '中文'
    },{
      code: 'en',
      viewValue: 'English'
    },
  ]

  constructor(
    private breakpointObserver: BreakpointObserver
  ){}

  changeLang(event: any) {
    console.log(event)
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


}
