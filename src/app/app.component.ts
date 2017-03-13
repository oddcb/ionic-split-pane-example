import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import {SplitCommunication} from "../pages/split/SplitCommunication";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  @ViewChild("content") content:Nav;

  constructor(platform: Platform, private splitCom:SplitCommunication) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.splitCom.setAppComponentRoot$.subscribe(() => {
        console.info("Setting TabsPage as root again");
        this.content.setRoot(TabsPage);
      })
    });
  }
}
