import { Injectable } from '@angular/core';

@Injectable()

export class FormStepperService {

  public finalData:any[];
  
  constructor() { 
    this.finalData = []
  }
}
