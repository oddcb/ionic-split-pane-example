import {Component, Input} from "@angular/core";
import {MenuLevel2} from "./MenuLevel2";
import {NavController} from "ionic-angular";
import {SplitCommunication} from "./SplitCommunication";
@Component({
  selector: 'menu-level1',
  templateUrl: 'MenuLevel1.html'
})
export class MenuLevel1 {
  level2 = MenuLevel2;

  @Input() content;

  constructor(private navCtrl:NavController, private splitCommunication:SplitCommunication) {}

  viewLevel2() {
    this.navCtrl.push(MenuLevel2);
    this.splitCommunication.setRootPage('contact')
  }
}

