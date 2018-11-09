import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {BillPsgeComponent} from './bill-psge/bill-psge.component';
import {HistoryPsgeComponent} from './history-psge/history-psge.component';
import {PlanningPsgeComponent} from './planning-psge/planning-psge.component';
import {RecordsPsgeComponent} from './records-psge/records-psge.component';
import {RecordsItemComponent} from './records-psge/records-item/records-item.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent,
    children: [
      {path: 'bill', component: BillPsgeComponent},
      {path: 'history', component: HistoryPsgeComponent},
      {path: 'planning', component: PlanningPsgeComponent},
      {path: 'records', component: RecordsPsgeComponent,
        children: [
          {path: ':id', component: RecordsItemComponent}
      ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
  
}
