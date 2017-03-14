import {Component, ViewChild} from "@angular/core";
import {HomePage} from "../home/home";
import {MenuController, NavController} from "ionic-angular";
import {MenuLevel1} from "../split/MenuLevel1";

@Component({
  selector: 'split-page2',
  templateUrl: 'split.html'
})
export class SplitPage2 {

  menuLevelOne = MenuLevel1;
  contentArea = HomePage;

  @ViewChild("sideMenu") sideMenuCtrl: NavController;
  @ViewChild("content") contentCtrl: NavController;

  constructor(private menuCtrl:MenuController) {
  }

  ionViewDidEnter() {
    // This have to be present to get menu to display after navigation between other tabs with menus
    //this.menuCtrl.enable(true, "menu2");
  }

}
