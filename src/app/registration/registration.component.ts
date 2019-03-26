import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControlName, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  name: string = '';
  password: string = '';
  confirmPassword: string = '';

  nameValid: boolean = false;
  passwordValid: boolean = false;
  confirmPasswordValid: boolean = false;

  constructor( private fb: FormBuilder, private router: Router ) { 
    
  }

  ngOnInit() {
    
  }

  onChange(e, detail){
    switch(detail){
      case 'name':
        this.name = e;
        this.nameValid = this.name.length < 2 ? false : true;
        break;
      case 'password':
        this.password = e;
        this.passwordValid = this.password.length < 8 ? false : true;
        break;
      case 'confirmPassword':
        this.confirmPassword = e;
        this.confirmPasswordValid = this.confirmPassword !== this.password ? false : true;
        break;
    }
  }

  signUp(){
    this.router.navigate(['/grid']);
  }
}
