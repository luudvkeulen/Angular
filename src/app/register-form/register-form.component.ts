import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html'
})

export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  user = new User(0, '', '', '', '', '');
  submitted = false;

  onValueChanged(data?: any) {
    if (!this.registerForm) return;
    const form = this.registerForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    this.user = new User(0, '', '', '', '', '');
  }

  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.'
    }, 'password': {
      'required': 'Password can\'t be empty'
    }
  };

  buildForm(): void {
    this.registerForm = this.fb.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }
}
