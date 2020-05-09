import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReimbursementRoutingModule } from './reimbursement-routing.module';
import { ReimbursementPageComponent } from './pages/reimbursement/reimbursement-page/reimbursement-page.component';
import { ReimbursementStep1PageComponent } from './pages/reimbursement/reimbursement-step1-page/reimbursement-step1-page.component';
import { ReimbursementStep2PageComponent } from './pages/reimbursement/reimbursement-step2-page/reimbursement-step2-page.component';

@NgModule({
  declarations: [ReimbursementPageComponent, ReimbursementStep1PageComponent, ReimbursementStep2PageComponent],
  imports: [CommonModule, HttpClientModule, ReimbursementRoutingModule, TranslateModule.forChild()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReimbursementModule {}
