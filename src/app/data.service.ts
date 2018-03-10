import { Injectable } from '@angular/core';

//to share data between components is to use rxjs behavior subject library
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  public somethings = new BehaviorSubject<any>(['first','second']);
  public something = this.somethings.asObservable();

  constructor() { }

  //this is a service
  changeSomething(something){
    this.somethings.next(something);
  }
}
