import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-psge/bill-page.component';
import { HistoryPsgeComponent } from './history-psge/history-psge.component';
import { PlanningPsgeComponent } from './planning-psge/planning-psge.component';
import { RecordsPsgeComponent } from './records-psge/records-psge.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {DropdownDirective} from '../shared/directives/dropdown.directive';
import { BillCardComponent } from './bill-psge/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-psge/currency-card/currency-card.component';
import { BillService } from '../shared/services/bill.service';
import {HttpClientModule} from '@angular/common/http';
import { AddCategoryComponent } from './records-psge/add-category/add-category.component';
import { EditCategoryComponent } from './records-psge/edit-category/edit-category.component';
import { AddEventComponent } from './records-psge/add-event/add-event.component';
import {CategoryService} from '../shared/services/category.service';
import {EventService} from '../shared/services/event.service';

@NgModule({
  imports: [CommonModule, SharedModule, SystemRoutingModule,  HttpClientModule],
  declarations: [
    SystemComponent,
    BillPageComponent,
    HistoryPsgeComponent,
    PlanningPsgeComponent,
    RecordsPsgeComponent,
    HeaderComponent,
    SideBarComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddEventComponent
  ],
  providers: [ BillService, CategoryService, EventService ]
})
export class SystemModule {}
