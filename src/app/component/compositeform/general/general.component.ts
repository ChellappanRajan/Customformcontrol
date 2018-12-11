import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlValueAccessor, NgControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements ControlValueAccessor, OnInit {

  generalForm: FormGroup;
  onTouched: (value: any)=> void;

  constructor(private control: NgControl, private fb: FormBuilder) {
    this.control.valueAccessor= this;
    this.buildForm();
   }

  ngOnInit() {
    
  }

  buildForm() {
    this.generalForm = this.fb.group({
      name:  [null],
      lastName:  [null],
      userName:  [null]
    })
  }

  writeValue(value: any) {
    //Write Value to DOM
    value && this.generalForm.setValue(value, { emitEvent: false});
  }

  registerOnChange(fn:(value: any)=> void) {
    //Register a call back when ui changes
    this.generalForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: (value: any)=> void) {
    this.onTouched=fn;
  }

}
