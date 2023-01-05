import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStepperService } from 'src/app/stepper/form-stepper.service';
import { AddOnsPresenterService } from '../add-ons-presenter/add-ons-presenter.service';

@Component({
  selector: 'app-add-ons-presentation',
  templateUrl: './add-ons-presentation.component.html',
  viewProviders:[AddOnsPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddOnsPresentationComponent implements OnInit {

  public onsGroup:FormGroup;
  public duration:boolean;

  constructor(
    private _service:AddOnsPresenterService,
    private _mainService:FormStepperService,
    private _route:Router
  ) { 
    this.onsGroup = this._service.getBuilder();
    this.duration = this._mainService.finalData[1].yearly
  }

  ngOnInit(): void {
    this.props();
  }
  
  public props(){
    if(this._mainService.finalData[2])
    this.onsGroup.patchValue(this._mainService.finalData[2])
    
    this._service.addsData$.subscribe((data) => this._mainService.finalData[2] = data);
    this.onCheck();
    this.onsGroup.valueChanges.subscribe(() => this.onCheck())
  }

  public onSubmit(){
    this._route.navigateByUrl('/four');
    this._service.getData(this.onsGroup.value)
  }
  
  public onBack(){
    this._route.navigateByUrl('/two');
    this._service.getData(this.onsGroup.value)
  }

  public onCheck(){
    let values = Object.values(this.onsGroup.value)
    return values.includes(true) ? false : true 
  }
}
