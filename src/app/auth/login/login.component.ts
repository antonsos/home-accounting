import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {UserModel} from '../../shared/models/user.model';
import {MessageModel} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {fadeTrigger} from '../../shared/animations/faid.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeTrigger]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: MessageModel;

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.message = new MessageModel('danger', '');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Поздравляем вы зарегестрированны!',
            type: 'success'
          });
        } else if (params['accessDenied']) {
          this.showMessage({
            text: 'Вы не авторизованы',
            type: 'warning'
          });
        }
      });

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

  private showMessage(message: MessageModel) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }

  onSubmit() {
    this.userService.getUserByEmail(this.form.value.email)
      .subscribe((user: UserModel) => {
        if (user) {
          if (user.password === this.form.value.password) {
            this.showMessage({
              text: `Добрый день ${user.name}`,
              type: 'success'
            });
            this.authService.login();
            window.localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/system', 'bill']);
            this.message.text = '';
          } else {
            this.showMessage({
              text: 'не верный пароль',
              type: 'danger'
            });
          }
        } else {
          this.showMessage({
            text: 'пользователь не наеден',
            type: 'danger'
          });
        }
      });
  }

}
