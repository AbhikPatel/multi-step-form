import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class SubscribtionPlanPresenterService {

  private planData: Subject<any>;
  public planData$: Observable<any>;

  constructor(
    private _fb: FormBuilder
  ) {
    this.planData = new Subject();
    this.planData$ = new Observable();
    this.planData$ = this.planData.asObservable();
  }

  public getBuilder() {
    return this._fb.group({
      plan: ['', [Validators.required]]
    })
  }

  public SubscribtionData = [
    {
      icon: '../../../../../assets/images/icon-arcade.svg',
      title: 'Arcade',
      price: '$9/mo',
      value: 9
    },
    {
      icon: '../../../../../assets/images/icon-advanced.svg',
      title: 'Advanced',
      price: '$12/mo',
      value: 12
    },
    {
      icon: '../../../../../assets/images/icon-pro.svg',
      title: 'Pro',
      price: '$15/mo',
      value: 15
    },
  ];

  public getData(data: any, status: boolean) {
    if (status) {
      this.SubscribtionData[0].price = '$90/yr'
      this.SubscribtionData[1].price = '$120/yr'
      this.SubscribtionData[2].price = '$150/yr'
    }
    let plan:any = this.SubscribtionData.find((item) => item.value === data)

    if(status)  
      plan.value = plan.value*10;
     
    let duration = { yearly: status };
    this.planData.next(Object.assign(plan, duration))
  }
}
