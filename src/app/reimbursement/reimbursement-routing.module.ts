import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { REIMBURSEMENT_CHILD_PAGE, REIMBURSEMENT_CHILD_STEP1_PAGE, REIMBURSEMENT_CHILD_STEP2_PAGE } from 'src/app/constants';
import { ReimbursementPageComponent } from './pages/reimbursement/reimbursement-page/reimbursement-page.component';
import { ReimbursementStep1PageComponent } from './pages/reimbursement/reimbursement-step1-page/reimbursement-step1-page.component';
import { ReimbursementStep2PageComponent } from './pages/reimbursement/reimbursement-step2-page/reimbursement-step2-page.component';

const routes: Routes = [
  {
    path: `${REIMBURSEMENT_CHILD_PAGE}/:id`,
    component: ReimbursementPageComponent,
    children: [
      {
        path: REIMBURSEMENT_CHILD_STEP1_PAGE,
        component: ReimbursementStep1PageComponent,
      },
      {
        path: REIMBURSEMENT_CHILD_STEP2_PAGE,
        component: ReimbursementStep2PageComponent,
      },
      {
        path: '',
        redirectTo: REIMBURSEMENT_CHILD_STEP1_PAGE,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReimbursementRoutingModule {}
