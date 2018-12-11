import { Component, OnInit } from "@angular/core";

import {
  FormGroup,
  FormBuilder,
  ControlValueAccessor,
  NgControl,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"]
})
export class AddressComponent implements ControlValueAccessor, OnInit {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private control: NgControl) {
    //NgControl is a special class to provide value accessor it provide all form directive
    this.control.valueAccessor = this;
     

    this.buildForm();
  }

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  ngOnInit() {
     const ctrl = this.control.control;
     ctrl.setValidators(Validators.required);
    // ctrl._parent.get('address').setValidators(Validators.required);
     ctrl.updateValueAndValidity();
    //  this.addressForm.get('city').setValidators(Validators.required);
  }

  buildForm() {
    this.addressForm = this.fb.group({
      city: [null, Validators.required],
      state: [null, Validators.required],
      zip: [null ,Validators.required],
      terms: [false, YesOrNo]
    });
  
  }

  writeValue(value: any) {
    //Write a Value Model to View write a value to element
    value && this.addressForm.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: any) => void) {
    
    //Register a call back when the ui control changes
    this.addressForm.valueChanges.subscribe(fn);
    //this.onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void) {
    this.onTouched = fn;
  }
}

function YesOrNo(c: AbstractControl) {
console.log(c.value);

   return c.value === true ? null : {'Invalid': true};

  // return null;
}
