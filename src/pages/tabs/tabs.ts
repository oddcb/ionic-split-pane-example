import {Component} from "@angular/core";
import {ContactPage} from "../contact/contact";
import {SplitPage} from "../split/split";
import {SplitPage2} from "../split2/split";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SplitPage;
  tab2Root: any = SplitPage2;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
