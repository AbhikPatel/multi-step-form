import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperContainerComponent } from './stepper-container/stepper-container.component';
import { StepperPresenationComponent } from './stepper-container/stepper-presenation/stepper-presenation.component';
import { UserInfoPresentationComponent } from './stepper-container/stepper-presenation/user-info-presentation/user-info-presentation.component';
import { SubscribtionPlanPresentationComponent } from './stepper-container/stepper-presenation/subscribtion-plan-presentation/subscribtion-plan-presentation.component';
import { AddOnsPresentationComponent } from './stepper-container/stepper-presenation/add-ons-presentation/add-ons-presentation.component';
import { SummaryPresentationComponent } from './stepper-container/stepper-presenation/summary-presentation/summary-presentation.component';
import { FormStepperService } from './form-stepper.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankYouPresentationComponent } from './stepper-container/stepper-presenation/thank-you-presentation/thank-you-presentation.component';


@NgModule({
  declarations: [
    StepperContainerComponent,
    StepperPresenationComponent,
    UserInfoPresentationComponent,
    SubscribtionPlanPresentationComponent,
    AddOnsPresentationComponent,
    SummaryPresentationComponent,
    ThankYouPresentationComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    FormStepperService
  ]
})
export class StepperModule { }
