import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsersServices} from '../../shared/services/users.services';
import {UserModel} from '../../shared/models/user.model';
import {MessageModel} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: MessageModel;

  constructor(
    private userService: UsersServices,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.message = new MessageModel('danger', '');
    this.form = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new MessageModel(type, text);

    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }

  onSubmit() {
    this.userService.getUserByEmail(this.form.value.email)
      .subscribe((user: any) => {
        if (user) {
          if (user.password === this.form.value.password) {
            this.showMessage(`Добрый день ${user.name}`, 'success');
            this.authService.login();
            window.localStorage.setItem('user', JSON.stringify(user));
            // this.router.navigate([]);
            this.message.text = '';
          } else {
            this.showMessage('не верный пароль');
          }
        } else {
          this.showMessage('пользователь не наеден');
        }
      });
  }

}
