import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<void>();

  sendKeyPressEvent(){
    this.subject.next();
  }
  getKeyPressEvent():Observable<any>{
    return this.subject.asObservable();
  }

  // private subject2 = new Subject<void>();
  // sendResetEvent(){
  //   this.subject2.next();
  // }
  // getResetEvent():Observable<any>{
  //   return this.subject2.asObservable();
  // }
}
