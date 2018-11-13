import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {BillPageComponent} from './bill-psge/bill-page.component';
import {HistoryPsgeComponent} from './history-psge/history-psge.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPsgeComponent} from './records-psge/records-psge.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent,
    children: [
      {path: 'bill', component: BillPageComponent},
      {path: 'history', component: HistoryPsgeComponent},
      {path: 'planning', component: PlanningPageComponent},
      {path: 'records', component: RecordsPsgeComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
