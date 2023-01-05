import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStepperService } from 'src/app/stepper/form-stepper.service';
import { UserInfoPresenterService } from '../user-info-presenter/user-info-presenter.service';

@Component({
  selector: 'app-user-info-presentation',
  templateUrl: './user-info-presentation.component.html',
  viewProviders: [UserInfoPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoPresentationComponent implements OnInit {

  public infoGroup: FormGroup;
  constructor(
    private _service: UserInfoPresenterService,
    private _mainService: FormStepperService,
    private _route: Router
  ) {
    this.infoGroup = this._service.getBuilder();
  }

  ngOnInit(): void {
    this.props();
  }

  public props() {
    if (this._mainService.finalData[0])
      this.infoGroup.patchValue(this._mainService.finalData[0])

    this._service.infoData$.subscribe((data) => this._mainService.finalData[0] = data)
  }

  public onSubmit() {
    this._route.navigateByUrl('/two');
    this._service.getData(this.infoGroup.value)
  }

  public get getControls() {
    return this.infoGroup['controls']
  }
}
