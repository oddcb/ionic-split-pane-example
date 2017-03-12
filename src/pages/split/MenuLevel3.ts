import {Component, Input} from "@angular/core";
import {SplitCommunication} from "./SplitCommunication";
@Component({
  selector: 'menu-level3',
  templateUrl: 'MenuLevel3.html'
})
export class MenuLevel3 {


  constructor(private splitCom:SplitCommunication) {

  }

  viewHome() {
    console.info("View the home page");
    this.splitCom.pushPage('home');
  }

  viewAbout() {
    console.info("View the about page");
    this.splitCom.pushPage('about');
  }

  viewContact() {
    console.info("View the contact page");
    this.splitCom.pushPage('contact');
  }
}
