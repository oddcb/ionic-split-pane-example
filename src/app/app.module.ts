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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SplitPage,
    MenuLevel1,
    MenuLevel2
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
    MenuLevel1,
    MenuLevel2
  ],
  providers: [
    SplitCommunication,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
