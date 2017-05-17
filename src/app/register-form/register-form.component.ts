import {Component} from '@angular/core';
import {User} from '../_models/user';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html'
})

export class RegisterFormComponent {
  minPasswordLength = 8;
  user = new User(0, '', '', '', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user = new User(0, '', '', '', '', '');
  }
}
