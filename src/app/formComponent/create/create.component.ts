import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  jsonData: any = [
    {
      "elementType": "dropdown",
      "key": 'project',
      "label": 'Choose option to display',
      "options": [
        { "key": 'inputbox', "value": 'Show Project Level as input box' },
        { "key": 'dropdown', "value": 'Show Project Level as dropdown' }
      ],
      "order": 1
    },
    {
      "elementType": "textbox",
      "class": "col-12 col-md-4 col-sm-12",
      "key": "project_level",
      "label": "Project Level as input box",
      "type": "text",
      "value": "",
      "order": 2
    },
    {
      "elementType": "dropdown",
      "key": 'project_level',
      "label": 'Choose Project Level as dropdown',
      "options": [
        { "key": 'low', "value": 'Low' },
        { "key": 'medium', "value": 'Medium' },
        { "key": 'high', "value": 'High' }
      ],
      "order": 2
    }
  ];

  form: FormGroup;

  fields=['Checkbox','radio','text'];
  constructor(private fb: FormBuilder) {

    

   }

  ngOnInit() {
    this.buildForm();

    this.form.get('select').valueChanges.subscribe(value=>{
      let control = {};
      control['value']=new FormControl();
      this.form.addControl(value,new FormControl())
    })
  }

  buildForm() {
    this.form = this.fb.group({
      select:''
    }) 
  }

}
