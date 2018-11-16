import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeTrigger} from '../shared/animations/faid.animation';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  animations: [fadeTrigger]
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}

  @HostBinding('@fade') nonStop = true;

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }

}
