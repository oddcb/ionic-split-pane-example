import {Component, Input} from "@angular/core";
import {SplitCommunication} from "./SplitCommunication";
@Component({
  selector: 'menu-level2',
  templateUrl: 'MenuLevel2.html'
})
export class MenuLevel2 {


  constructor(private splitCom:SplitCommunication) {

  }

  viewHome() {
    console.info("View the home page");
    this.splitCom.viewPage('home');
  }

  viewAbout() {
    console.info("View the about page");
    this.splitCom.viewPage('about');
  }

  viewContact() {
    console.info("View the contact page");
    this.splitCom.viewPage('contact');
  }
}
