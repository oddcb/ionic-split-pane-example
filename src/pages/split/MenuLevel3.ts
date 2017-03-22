import {Component} from "@angular/core";
import {SplitCommunication} from "./SplitCommunication";
import {HomePage} from "../home/home";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";
@Component({
  selector: 'menu-level3',
  templateUrl: 'MenuLevel3.html'
})
export class MenuLevel3 {


  constructor(private splitCom: SplitCommunication) {

  }

  viewHome() {
    console.info("View the home page");
    this.splitCom.pushPage({page: HomePage, data: {text: 'Hello Home'}});
  }

  viewAbout() {
    console.info("View the about page");
    this.splitCom.pushPage({page: AboutPage, data: {text: 'Hello What is this about?'}});
  }

  viewContact() {
    console.info("View the contact page");
    this.splitCom.pushPage({page: ContactPage, data: {products: [{id: 1, title: 'Ionic 2'}]}});
  }
}
