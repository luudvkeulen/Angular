import {Component, OnInit} from '@angular/core';
import {User} from '../_models/user';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

function passwordMatchValidator(formGroup: FormGroup) {
  return formGroup.get('password').value === formGroup.get('password2').value ? null : {'mismatch': true};
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})

export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  user: User;
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
      var control = form.get(field);
      if (control instanceof FormGroup) {
        control = control.get(field);
      }

      if (control == null) {
        for (const formControlName in form.controls) {
          const formControl = form.get(formControlName);
          if (formControl instanceof FormGroup) {
            if (formControl.get(field) != null) {
              control = formControl.get(field);
              break;
            }
          }
        }
      }

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
    },
    'password': {
      'required': 'Password cannot be empty.',
      'minlength': 'Password must be at least 8 characters long.'
    }
  };

  buildForm(): void {
    this.registerForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        password2: ['']
      }, passwordMatchValidator)
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


}
