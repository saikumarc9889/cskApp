import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

export class LocationForm extends FormGroup {
  constructor(private _locationDetails: Locations) {
    super({
      id: new FormControl(_locationDetails.id),
      label: new FormControl(_locationDetails.label,Validators.required),
      code: new FormControl(_locationDetails.code,Validators.required),
    });
  }

  public getErrorMsg=($controlName:string):string=>{
        console.log('...$controlName..1...',$controlName)
        switch($controlName){
            case 'label':          
                return this.getFullErrorMsg('Label',$controlName);
                break
            case 'code':          
                return this.getFullErrorMsg('Code',$controlName);
                break
            
            
            
            // 
            
        
          default:
            return `Something is missing in the form. Please check with Admin!`
        } 
      }

      public getFullErrorMsg=($title:string,$controlName:string):string=>{
      
          if(this.get($controlName)?.hasError(Validators.required.name)){
            return `<h5>${$title}</h5><p>Not entered. It is mandatory!</p>`
          }else{
            if(this.get($controlName)?.invalid) {
                switch($controlName){
                    case 'jobHistory':
                        console.log($controlName,'..Error in jobHistory.....',this.get($controlName))
                       
                        if(!this.get($controlName)?.errors){
                            let $dataItem=this.get('jobHistory')  as FormArray
                            for (const $dataGroup of $dataItem.controls) {
                                const allControls = $dataGroup as FormGroup;
                                console.log("all",allControls.controls['status'].value)
                                for (const controlName in allControls.controls) {
                                    if (allControls.controls.hasOwnProperty(controlName)) {
                                        const control = allControls.controls[controlName];
                                        if (control.invalid) {
                                            if(controlName=='status'){
                                                return `<h5>${$title}</h5><p>Please enter the Status</p>`
                                            }
                                            if(controlName=='location_code'){
                                                return `<h5>${$title}</h5><p>Please enter the Location</p>`
                                            }
                                            if(controlName=='business_code'){
                                                return `<h5>${$title}</h5><p>Please enter the Business</p>`
                                            }
                                            if(controlName=='startDate'){
                                                return `<h5>${$title}</h5><p>Please enter the Start Date</p>`
                                            }
                                            if(controlName=='endDate'){
                                                return `<h5>${$title}</h5><p>Please enter the End Date</p>`
                                            }
                                            if(controlName=='role_code'){
                                                return `<h5>${$title}</h5><p>Please enter the Role</p>`
                                            }
                                            if(controlName=='jobType_code'){
                                                return `<h5>${$title}</h5><p>Please enter the jobType</p>`
                                            }
                                            if(controlName=='level_code'){
                                                return `<h5>${$title}</h5><p>Please enter the Level</p>`
                                            }
                                            if(controlName=='leadEmail'){
                                                return `<h5>${$title}</h5><p>Please enter the leadEmail</p>`
                                            }
                                            if(controlName=='coachEmail'){
                                                return `<h5>${$title}</h5><p>Please enter the coachEmail</p>`
                                            }
                                            if(controlName=='is_promoted'){
                                                return `<h5>${$title}</h5><p>Please select the IsPromoted</p>`
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if(this.get($controlName)?.errors) {
                            let validationErrors = this.get($controlName)?.errors
                            for(const error in validationErrors) {
                                console.log("error",error)
                                switch (error) {
                                    case "startDateShouldBeLessThanEndDate" :
                                        return "<h5>Job Details:</h5></h><p>Please check all start/EndDate</p>";
                                        break;
                                    case "duplicateJobStatus" :
                                        return "<h5>Job Details:</h5></h><p>Duplicate Job Status</p>";
                                        break
                                    case "datesOverlap" :
                                        return "<h5>Job Details:</h5></h><p>Check all dates Overlaped</p>";
                                        break
                                    case "isNotActive" :
                                        return "<h5>Job Details:</h5></h><p>Active is Mandatory</p>";
                                        break
                                    case "duplicateSpecialStatus" :
                                        return "<h5>Job Details:</h5></h><p>Duplicate Special Status</p>";
                                        break
                                    case "multipleStatuses" :   
                                        return "<h5>Job Details:</h5></h><p>At least One should be Status of Active or Notice Period or Exit</p>";
                                        break
                                }
                            }
                            // let temp = Object.keys(validationErrors.for)
                            
                        }
                        return `<h5>${$title}</h5><p>Final</p>`
                    break
                    
                    default:
                    return ''
                    break
                }
                
            }
            return ''
            // switch($controlName){
            //   case 'projectName':
            //     if(this.get($controlName)?.hasError(Validators.minLength.name.toLowerCase())){
            //       let $err=this.get('projectName')?.errors?.[Validators.minLength.name.toLowerCase()]
            //       return `<h5>${$title}</h5><p>Minimum project name length should be ${$err.requiredLength}</p>`
            //     }
            //     return `<h5>${$title}</h5><p>${this.get($controlName)?.errors}</p>`
            //   break
            //   default:
            //     return `<h5>${$title}</h5><p>${this.get($controlName)?.errors}</p>`
            //     break
            // }
          }
      }


}



export class Locations {
    id!: number;
    label!: string;
    code!: string;
}