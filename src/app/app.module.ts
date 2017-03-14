import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SplitPage} from "../pages/split/split";
import {MenuLevel1} from "../pages/split/MenuLevel1";
import {MenuLevel2} from "../pages/split/MenuLevel2";
import {SplitCommunication} from "../pages/split/SplitCommunication";
import {MenuLevel3} from "../pages/split/MenuLevel3";
import {SplitPage2} from "../pages/split2/split";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SplitPage,
    SplitPage2,
    MenuLevel1,
    MenuLevel2,
    MenuLevel3
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SplitPage,
    SplitPage2,
    MenuLevel1,
    MenuLevel2,
    MenuLevel3
  ],
  providers: [
    SplitCommunication,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
