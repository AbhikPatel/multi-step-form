import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormStepperService } from 'src/app/stepper/form-stepper.service';
import { SummaryPresenterService } from '../summary-presenter/summary-presenter.service';

@Component({
  selector: 'app-summary-presentation',
  templateUrl: './summary-presentation.component.html',
  viewProviders:[SummaryPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryPresentationComponent implements OnInit {

  public duration:boolean;
  public plan:string;
  public payment:string;
  public addson:any;
  public total:number;

  constructor(
    private _service: SummaryPresenterService,
    private _route:Router,
    private _mainService:FormStepperService
  ) { 
    this.duration = this._mainService.finalData[1].yearly;
    this.plan = this._mainService.finalData[1].title;
    this.payment = this._mainService.finalData[1].price;
    this.addson = _mainService.finalData[2];
    this.total = this._mainService.finalData[1].value + this._mainService.finalData[2].value 
  }

  ngOnInit(): void {
  }

}
