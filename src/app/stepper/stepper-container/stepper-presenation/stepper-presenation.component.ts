import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepperPresenterService } from '../stepper-presenter/stepper-presenter.service';

@Component({
  selector: 'app-stepper-presenation',
  templateUrl: './stepper-presenation.component.html',
  viewProviders:[StepperPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StepperPresenationComponent implements OnInit {

  public currentStep:number;

  constructor(
    private _service:StepperPresenterService,
    private _route:Router
  ) { 
    this.currentStep = this.activeStep();
  }

  ngOnInit(): void {
  }

  public stepNav = [
    {
      id:1,
      title:'YOUR INFO'
    },
    {
      id:2,
      title:'SELECT INFO'
    },
    {
      id:3,
      title:'ADD-ONS'
    },
    {
      id:4,
      title:'SUMMARY'
    }
  ]

  public activeStep(){
    if(this._route.url === '/one')
      return 1
    else if(this._route.url === '/two')
      return 2
    else if(this._route.url === '/three')
      return 3
    else
      return 4
  }
}
