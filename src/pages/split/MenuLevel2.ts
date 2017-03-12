import {Component, Input} from "@angular/core";
import {SplitCommunication} from "./SplitCommunication";
import {NavController} from "ionic-angular";
import {MenuLevel3} from "./MenuLevel3";
@Component({
  selector: 'menu-level2',
  templateUrl: 'MenuLevel2.html'
})
export class MenuLevel2 {


  constructor(private splitCom:SplitCommunication, private navCtrl:NavController) {

  }

  viewHome() {
    console.info("View the home page");
    this.navCtrl.push(MenuLevel3);
    this.splitCom.setRootPage('home');
  }

  viewAbout() {
    console.info("View the about page");
    this.navCtrl.push(MenuLevel3);
    this.splitCom.setRootPage('about');
  }

  viewContact() {
    console.info("View the contact page");
    this.navCtrl.push(MenuLevel3);
    this.splitCom.setRootPage('contact');
  }
}
