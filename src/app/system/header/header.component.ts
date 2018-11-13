import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public date = new Date();
  user: UserModel;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
