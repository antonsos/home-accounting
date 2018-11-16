import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../shared/models/user.model';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public date = new Date();
  user: UserModel;

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
