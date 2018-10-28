import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {UserModel} from '../../shared/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.email,
        Validators.required
      ]),
        this.isExisting
      ),
      password: new FormControl(null, Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      name: new FormControl(null, Validators.required),
      agree: new FormControl(false, Validators.requiredTrue)
    });
  }

  onSubmite() {
    const {email, password, name} = this.form.value;
    const user = new UserModel(email, password, name);

    this.userService.createUser(user)
    .subscribe(() => {
      this.router.navigate(['/login'], {
        queryParams: {
          nowCanLogin: true
        }
      });
    });
  }

  isExisting = (control: FormControl): Promise<any> => {
    return new Promise<any>((res) => {
      this.userService.getUserByEmail(control.value)
        .subscribe((user: UserModel) => {
          if (user) {
            res({existing: true});
          } else {
            res(null);
          }
        });
    });
  }

}
