import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AddOnsPresenterService {

  private addsData:Subject<any>;
  public addsData$:Observable<any>;
  
  constructor(
    private _fb:FormBuilder
  ) { 
    this.addsData = new Subject();
    this.addsData$ = new Observable();
    this.addsData$ = this.addsData.asObservable();
  }

  public getBuilder(){
    return this._fb.group({
      online:[false, [Validators.required]],
      profile:[false, [Validators.required]],
      storage:[false, [Validators.required]]
    })
  }

  public getData(data:any){
    this.addsData.next(Object.assign(data, {value: 10}));
  }
}
