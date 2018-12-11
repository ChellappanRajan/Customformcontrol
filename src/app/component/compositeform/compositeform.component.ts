
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-compositeform',
  templateUrl: './compositeform.component.html',
  styleUrls: ['./compositeform.component.scss']
})
export class CompositeformComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    //Create a form
    this.buildForm();
    
  }

  buildForm() {
    this.form= this.fb.group({
      general: '',
      address: ''
    })
   
  }

  onSumit() {
    console.log('Address',this.form.get('address'));
    console.log('General',this.form.get('general'));
  }

}