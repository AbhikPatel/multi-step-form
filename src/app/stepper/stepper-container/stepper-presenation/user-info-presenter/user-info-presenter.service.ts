import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class UserInfoPresenterService {

  private infoData:Subject<any>;
  public infoData$:Observable<any>;

  constructor(
    private _fb:FormBuilder
  ) { 
    this.infoData = new Subject();
    this.infoData$ = new Observable();
    this.infoData$ = this.infoData.asObservable();
  }

  public getBuilder(){
    return this._fb.group({
      fullName:['',[Validators.required]],
      phone:['',[Validators.required]],
      mail:['',[Validators.required]],
    })
  }

  public getData(data:any){
    this.infoData.next(data)
  }
}
