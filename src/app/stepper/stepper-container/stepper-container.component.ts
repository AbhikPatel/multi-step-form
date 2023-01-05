import { Component, OnInit } from '@angular/core';
import { FormStepperService } from '../form-stepper.service';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html'
})
export class StepperContainerComponent implements OnInit {

  constructor(
    private _service:FormStepperService
  ) { }

  ngOnInit(): void {
  }

}
