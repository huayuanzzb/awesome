import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  json1: string = '';
  json2: string = "";
  allIdents: number[] = [2, 4];
  ident: number;
  
  i18n_copied: string = $localize`Copied!`;

  constructor(
    private clipboard: Clipboard,
    private notifier: NotificationService,
  ) {
    this.ident = this.allIdents[0];
  }

  ngOnInit(): void {
  }

  onInputChangeJson1() {
    this.covertJson(this.ident);
  }

  private covertJson(ident: number) {
    try {
      if (this.json1 == null || this.json1 == undefined || this.json1.trim() == '') {
        this.json2 = '';
      } else {
        this.json2 = JSON.stringify(JSON.parse(this.json1), null, ident);
      }
    } catch (error: any) {
      this.json2 = error.message;
    }
  }

  onChangeIdent(ident: number) {
    this.ident = ident;
    this.covertJson(this.ident);
  }

  compress() {
    this.covertJson(0);
  }

  copy() {
    this.clipboard.copy(this.json2);
    this.notifier.notify(this.i18n_copied);
  }

}
