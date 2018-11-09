import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { SystemComponent } from './system.component';
import { BillPsgeComponent } from './bill-psge/bill-psge.component';
import { HistoryPsgeComponent } from './history-psge/history-psge.component';
import { PlanningPsgeComponent } from './planning-psge/planning-psge.component';
import { RecordsPsgeComponent } from './records-psge/records-psge.component';
import { RecordsItemComponent } from './records-psge/records-item/records-item.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {DropdownDirective} from '../shared/directives/dropdown.directive';
import { BillCardComponent } from './bill-psge/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-psge/currency-card/currency-card.component';

@NgModule({
  imports: [CommonModule, SharedModule, SystemRoutingModule],
  declarations: [
    SystemComponent,
    BillPsgeComponent,
    HistoryPsgeComponent,
    PlanningPsgeComponent,
    RecordsPsgeComponent,
    RecordsItemComponent,
    HeaderComponent,
    SideBarComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent
  ]
})
export class SystemModule {}
