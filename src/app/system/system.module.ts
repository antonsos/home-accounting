import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-psge/bill-page.component';
import { HistoryPageComponent } from './history-psge/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
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
import { HistoryChartComponent } from './history-psge/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-psge/history-events/history-events.component';
import { HistoryDetailComponent } from './history-psge/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-psge/history-filter/history-filter.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FilterPipe} from '../shared/pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    HttpClientModule,
    NgxChartsModule,
  ],
  declarations: [
    SystemComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPsgeComponent,
    HeaderComponent,
    SideBarComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddEventComponent,
    HistoryChartComponent,
    HistoryEventsComponent,
    HistoryDetailComponent,
    HistoryFilterComponent,
    FilterPipe,
  ],
  providers: [ BillService, CategoryService, EventService ]
})
export class SystemModule {}
