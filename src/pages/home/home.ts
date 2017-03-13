import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SplitCommunication} from "../split/SplitCommunication";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private splitCom: SplitCommunication) {

  }

  invokeAppComponentRoot() {
    this.splitCom.invokeSetAppComponentRoot();
  }

}
