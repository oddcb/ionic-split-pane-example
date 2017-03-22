import {Component, ViewChild} from "@angular/core";
import {MenuLevel1} from "./MenuLevel1";
import {HomePage} from "../home/home";
import {PageWithContext, SplitCommunication} from "./SplitCommunication";
import {MenuController, NavController} from "ionic-angular";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";
import {Subscription} from "rxjs";

@Component({
  selector: 'split-page',
  templateUrl: 'split.html'
})
export class SplitPage {

  menuLevelOne = MenuLevel1;
  contentArea = HomePage;

  rootSubjectSubscription: Subscription;
  pushSubjectSubscription: Subscription;


  @ViewChild("sideMenu") sideMenuCtrl: NavController;
  @ViewChild("content") contentCtrl: NavController;

  constructor(private splitCommunication: SplitCommunication, private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    console.info("Ion View Will Enter?");
    this.sideMenuCtrl.setRoot(MenuLevel1);
    this.contentCtrl.setRoot(HomePage);
  }

  ionViewWillLoad() {
    this.rootSubjectSubscription = this.splitCommunication.rootSubject$.subscribe((page) => {
      console.info(`Displaying ${page} with setRoot`);
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
    });

    this.pushSubjectSubscription = this.splitCommunication.pushSubject$.subscribe((pageWithContext: PageWithContext) => {
      console.info(`Displaying ${JSON.stringify(pageWithContext)} with Push`);
      this.contentCtrl.push(pageWithContext.page, {pageData: pageWithContext.data});
    })
  }

  ionViewWillUnload() {
    /* Make sure we unsubscribe. If this page is destroyed the subscription will still be alive
     and react to the events from split communication. This again will lead to push/setRoot on a NavController stack
     that doesn't exist anymore (null error for _queueTrns in NavBaseController
     */
    this.pushSubjectSubscription.unsubscribe();
    this.rootSubjectSubscription.unsubscribe();
  }

  ionViewDidEnter() {
    // This have to be present to get menu to display after navigation between other tabs with menus
    this.menuCtrl.enable(true, "menu1");
  }


}
