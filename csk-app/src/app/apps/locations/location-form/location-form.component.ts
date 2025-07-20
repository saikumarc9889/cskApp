import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LocationForm, Locations } from '../form/location.form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'cmp-location-form',
  imports: [CommonModule,CardModule,ButtonModule, InputTextModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.scss'
})
export class LocationFormComponent implements OnInit {

  @Input() isNew: boolean = false;

  private _locationData: any;
  @Input()
  set locationData(data: any) {
    this._locationData = data;
    this.updateFormValue();
  }

  locationForm!:LocationForm;

  isShowingForm: boolean = false;

  submitted: boolean = false;

  private _toastID: string = '';
  constructor(private toastService:HotToastService) {
  }

  private updateFormValue() {
    console.log('Updating form value with data:', this._locationData);
    if (this._locationData) {
      this.locationForm = new LocationForm(this._locationData);
    } else {
      let defaultData:Locations = new Locations();
      this.locationForm = new LocationForm(defaultData);
    }
  }


  ngOnInit(): void {
    this.updateFormValue();

    this.isShowingForm = true;
  }

  onSubmit() {
    
    this.submitted = true
    
    
    if(this.locationForm.valid){
      this.checkForSpecialConditionBeforeSubmit()
    }else{
      this.toastService.close(this._toastID)
      this.findAndShowErrorForSubmit()
      
    }
  }

  public findAndShowErrorForSubmit=():void=>{
    let $allControlsValid:boolean=true

    if(this.locationForm.hasError('checkAllJobHistory')){
      $allControlsValid=false
      this.showErrorMsgPanel('<h5>Job Details:</h5></h><p>Please check all job details</p>');    
    } 
    else if(this.locationForm.hasError('startDateShouldBeLessThanEndDate')) {
      $allControlsValid=false
      this.showErrorMsgPanel('<h5>Job Details:</h5></h><p>Please check all start/EndDate</p>'); 
    }
    
    else{

      for(let $controlName in this.locationForm.controls){

        if(this.locationForm.get($controlName)?.invalid){

          let $errorMsg:string=this.locationForm.getErrorMsg($controlName)
          this.showErrorMsgPanel($errorMsg);

          $allControlsValid=false
          break
        } 
        
      }
    }
    

    if($allControlsValid){
      this.showErrorMsgPanel('specialCondition...')
    }
  }

  public checkForSpecialConditionBeforeSubmit=():void=>{
    this.submitAction()
  }

  public showErrorMsgPanel=($errorMsg:string):void=>{
    this._toastID = this.generateUniqueId()
         
    
    this.toastService.error($errorMsg, {
      id: this._toastID, autoClose: false,
      dismissible: true
    })
  }

  protected submitAction=():void=>{
    
    
    if(this.isNew) {
      console.log('...submit..new..Action...',this.locationForm.value)
      
    } else {
      console.log('...submit..update..Action...',this.locationForm.value)

    }
    this.toastService.close(this._toastID)
    
  }

  protected generateUniqueId = (): string => {
    return `toast_${Date.now().toString(36)}`;
  }



}
