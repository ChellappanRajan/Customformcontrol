import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customformcontrol';
  form= new FormGroup({
    toggle: new FormControl('',[Validators.required])
    // food:new FormControl('', [Validators.required])
  });
}
