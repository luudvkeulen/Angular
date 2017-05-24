import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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


  onSubmit() {
    this.submitted = true;
    this.user = this.registerForm.value;
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) return;
    const form = this.registerForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
          break; //To only show first error
        }
      }
    }
  }

  formErrors = {
    'email': '',
    'password': '',
    'password2': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'This is not a valid e-mail address.'
    }, 'password': {
      'required': 'Password can\'t be empty.',
      'minlength': 'Password must be 8 characters or more.'
    }, 'password2': {
      'equal': 'Password\'s must be equal.'
    }
  };

  buildForm(): void {
    this.registerForm = this.fb.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(8)
      ]],
      'password2': [this.user.password2]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  validatePasswordEquals(control: FormControl): any {
    return control.value === this.registerForm.get('password').value ? null : true
  }
}
