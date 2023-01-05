import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperContainerComponent } from './stepper-container/stepper-container.component';
import { AddOnsPresentationComponent } from './stepper-container/stepper-presenation/add-ons-presentation/add-ons-presentation.component';
import { SubscribtionPlanPresentationComponent } from './stepper-container/stepper-presenation/subscribtion-plan-presentation/subscribtion-plan-presentation.component';
import { SummaryPresentationComponent } from './stepper-container/stepper-presenation/summary-presentation/summary-presentation.component';
import { ThankYouPresentationComponent } from './stepper-container/stepper-presenation/thank-you-presentation/thank-you-presentation.component';
import { UserInfoPresentationComponent } from './stepper-container/stepper-presenation/user-info-presentation/user-info-presentation.component';

const routes: Routes = [
  { path:'', component:StepperContainerComponent,
    children:[
      { path:'', redirectTo:'one', pathMatch:'full'},
      { path:'one', component:UserInfoPresentationComponent },
      { path:'two', component:SubscribtionPlanPresentationComponent },
      { path:'three', component:AddOnsPresentationComponent },
      { path:'four', component:SummaryPresentationComponent },
      { path:'final', component:ThankYouPresentationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
