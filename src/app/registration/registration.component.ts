import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControlName, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  userData: FormGroup;

  name: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor( private fb: FormBuilder ) { 
    
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }     
  }

  checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        return null;
    };
  }

  public ngOnInit() {
    this.userData = this.fb.group({
      name: ['', this.checkLimit(8,8)],
      password: new FormControl('', [Validators.maxLength(8)]),
      confirmPassword: [''] }, { validator: this.checkPasswords })
  }

  login(form){
    console.log(form);
  }
}
