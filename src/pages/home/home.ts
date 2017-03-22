import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pageData:any;
  constructor(private params:NavParams) {
    this.pageData = this.params.get('pageData');
    console.info("Got some page data: ", this.pageData)
  }
}
