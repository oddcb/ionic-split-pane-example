import {Component, ViewChild} from "@angular/core";
import {MenuLevel1} from "./MenuLevel1";
import {HomePage} from "../home/home";
import {SplitCommunication} from "./SplitCommunication";
import {NavController} from "ionic-angular";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'split-page',
  templateUrl: 'split.html'
})
export class SplitPage {

  menuLevelOne = MenuLevel1;
  contentArea = HomePage;

  @ViewChild("sideMenu") sideMenuCtrl: NavController;
  @ViewChild("content") contentCtrl: NavController;

  constructor(private splitCommunication: SplitCommunication) {
    this.splitCommunication.subject$.subscribe((page) => {
      console.info(`Displaying ${page}`);
      switch (page) {
        case 'home':
          this.contentCtrl.setRoot(HomePage);
          break;
        case 'about':
          this.contentCtrl.setRoot(AboutPage);
          break;
        default:
          this.contentCtrl.setRoot(ContactPage);
          break;
      }
    })
  }

  ionViewWillEnter() {
    console.info("Ion View Will Enter?");
    this.sideMenuCtrl.setRoot(MenuLevel1);
    this.contentCtrl.setRoot(HomePage);
  }

}
