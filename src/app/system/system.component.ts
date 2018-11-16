import {Component, HostBinding} from '@angular/core';
import {fadeTrigger} from '../shared/animations/faid.animation';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css'],
  animations: [fadeTrigger]
})
export class SystemComponent {
  @HostBinding('@fade') nonStop = true;
}
