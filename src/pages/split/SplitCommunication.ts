import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class SplitCommunication {

  subject = new Subject<any>();
  subject$ = this.subject.asObservable();

  viewPage(page:string) {
    this.subject.next(page);
  }
}
