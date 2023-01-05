import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormStepperService } from 'src/app/stepper/form-stepper.service';
import { ThankYouPresenterService } from '../thank-you-presenter/thank-you-presenter.service';

@Component({
  selector: 'app-thank-you-presentation',
  templateUrl: './thank-you-presentation.component.html',
  viewProviders:[ThankYouPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ThankYouPresentationComponent implements OnInit {

  public formData:any;
  constructor(
    private _service:ThankYouPresenterService,
    private _mainService:FormStepperService
  ) { 
    this.formData = this._mainService.finalData;
  }

  ngOnInit(): void {
    let final = {};
    this.formData.forEach((items:any) => Object.assign(final, items))
    console.log(final);
    
  }

}
