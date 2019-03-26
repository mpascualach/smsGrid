import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userData: FormGroup;

  constructor() { 
    this.userData = new FormGroup({
      name: new FormControl('name', Validators.maxLength(8)),
      password: new FormControl('password',  Validators.maxLength(8)),
      confirm: new FormControl('confirm',  Validators.maxLength(8)),
    })
  }

  // matchValidator(group: FormGroup) {
  //   var valid = false;
  
  //   for (name in group.controls) {
  //     var val = group.controls[name].value
  //     (...)
  //   }
  
  //   if (valid) {
  //     return null;
  //   }
  
  //   return {
  //     mismatch: true
  //   };
  // }

  ngOnInit() {
  }
}
