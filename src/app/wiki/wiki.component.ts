import { Component } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html'
})
export class WikiComponent {

  constructor(
  ){
    console.log(window.location.origin + window.location.pathname)
  }

}
