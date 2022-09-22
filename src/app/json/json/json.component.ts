import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  json1: string | null = null;
  json2: string | null = null;
  allIndents: number[] = [2, 4];
  indent: number;
  compress: boolean = false;
  
  i18n_copied: string = $localize`Copied!`;
  i18n_compress: string = $localize`Compress`;
  i18n_expand: string = $localize`Expand`;
  i18n_copyValue: string = $localize`Click to copy`;
  i18n_indent: string = $localize`Set indent`;
  i18n_setIndent: string = $localize`Set indent as `;

  constructor(
    private clipboard: Clipboard,
    private notifier: NotificationService,
  ) {
    this.indent = this.allIndents[0];
  }

  ngOnInit(): void {
  }

  onInputChangeJson1() {
    this.covertJson(this.indent);
  }

  private covertJson(indent: number) {
    try {
      if (this.json1 == null || this.json1 == undefined || this.json1.trim() == '') {
        this.json2 = null;
      } else {
        this.json2 = JSON.stringify(JSON.parse(this.json1), null, indent);
      }
    } catch (error: any) {
      this.json2 = error.message;
    }
  }

  onChangeIndent(indent: number) {
    this.indent = indent;
    this.covertJson(this.indent);
  }

  compressOrExpand() {
    this.compress = !this.compress;
    this.covertJson(this.compress ? 0 : this.indent);
  }

  copy() {
    if (this.json2) {
      this.clipboard.copy(this.json2);
      this.notifier.notify(this.i18n_copied);
    }
  }

}
