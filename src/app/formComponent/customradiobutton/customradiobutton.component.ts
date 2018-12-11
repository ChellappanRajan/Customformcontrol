import { Component, OnInit, Self } from "@angular/core";

import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  RadioControlValueAccessor,
  NgControl,
  Validators
} from "@angular/forms";
//NG_VALUE_ACCESSOR
//Used to provide a ControlValueAccessor for form controls.
//Control value accesor to register a html element with formcontrol

@Component({
  selector: "radiobutton",
  templateUrl: "./customradiobutton.component.html",
  styleUrls: ["./customradiobutton.component.scss"],
  
})
export class CustomradiobuttonComponent implements ControlValueAccessor,OnInit {
  isToggle: string = null;
  _isOnChange: (value: any) => void;
  active: string= null;
  constructor(@Self() private control:NgControl) {
    this.control.valueAccessor=this;
  }

  ngOnInit() {
    
   const control = this.control.control;
   control.setValidators(Validators.required);
   control.updateValueAndValidity();
  }

  writeValue(value: any) {
      this.isToggle = value;
  }

  registerOnChange(fn: (_: any) => void) {
    this._isOnChange = fn;
  }

  registerOnTouched() {}

  toggle(toggle: string) {
    
    this.isToggle = toggle;
    if(toggle === 'No'){
      this._isOnChange('');
    }
    else{
      this._isOnChange(toggle);
    }
 
  
  }
}
