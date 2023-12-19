import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  setData(data: any) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
