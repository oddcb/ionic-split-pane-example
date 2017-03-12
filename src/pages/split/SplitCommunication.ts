import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class SplitCommunication {

  rootSubject = new Subject<any>();
  rootSubject$ = this.rootSubject.asObservable();

  pushSubject = new Subject<any>();
  pushSubject$ = this.pushSubject.asObservable();

  setRootPage(page:string) {
    this.rootSubject.next(page);
  }

  pushPage(page:string) {
    this.pushSubject.next(page);
  }
}
