import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStepperService } from 'src/app/stepper/form-stepper.service';
import { SubscribtionPlanPresenterService } from '../subscribtion-plan-presenter/subscribtion-plan-presenter.service';

@Component({
  selector: 'app-subscribtion-plan-presentation',
  templateUrl: './subscribtion-plan-presentation.component.html',
  viewProviders: [SubscribtionPlanPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscribtionPlanPresentationComponent implements OnInit {

  public planSwitch: boolean;
  public planGroup: FormGroup;
  public planSubscribtion: any[]

  constructor(
    private _service: SubscribtionPlanPresenterService,
    private _mainService: FormStepperService,
    private _route: Router
  ) {
    this.planSwitch = false;
    this.planSubscribtion = this._service.SubscribtionData
    this.planGroup = this._service.getBuilder();
  }

  ngOnInit(): void {
    this.props();
  }

  public props() {
    if (this._mainService.finalData[1]) {
      this.planSwitch = this._mainService.finalData[1].yearly
      let patchData;
      if (this.planSwitch)
        patchData = { plan: this._mainService.finalData[1].value / 10 }
      else
        patchData = { plan: this._mainService.finalData[1].value }


      this.planGroup.patchValue(patchData)
    }

    this._service.planData$.subscribe((data) => this._mainService.finalData[1] = data)
  }


  public onSwitch() {
    if (this.planSwitch) {
      this.planSwitch = false
      this.planSubscribtion[0].price = '$9/mo'
      this.planSubscribtion[1].price = '$12/mo'
      this.planSubscribtion[2].price = '$15/mo'
    } else {
      this.planSwitch = true
      this.planSubscribtion[0].price = '$90/yr'
      this.planSubscribtion[1].price = '$120/yr'
      this.planSubscribtion[2].price = '$150/yr'
    }
  }

  public onSubmit() {
    this._route.navigateByUrl('/three');
    this._service.getData(this.planGroup.value.plan, this.planSwitch)
  }

  public onBack() {
    this._route.navigateByUrl('/one')
    this._service.getData(this.planGroup.value.plan, this.planSwitch)
  }
}
