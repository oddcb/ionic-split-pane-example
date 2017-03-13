import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class SplitCommunication {

  rootSubject = new Subject<any>();
  rootSubject$ = this.rootSubject.asObservable();

  pushSubject = new Subject<any>();
  pushSubject$ = this.pushSubject.asObservable();

  setAppComponentRoot = new Subject<any>();
  setAppComponentRoot$ = this.setAppComponentRoot.asObservable();

  setRootPage(page:string) {
    this.rootSubject.next(page);
  }

  pushPage(page:string) {
    this.pushSubject.next(page);
  }

  invokeSetAppComponentRoot() {
    this.setAppComponentRoot.next(true);
  }
}
