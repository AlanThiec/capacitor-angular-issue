import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REIMBURSEMENT_PAGE, REIMBURSEMENT_CHILD_STEP2_PAGE, REIMBURSEMENT_CHILD_PAGE, } from 'src/app/constants';

@Component({
  selector: 'mwh-reimbursement-step1-page',
  templateUrl: './reimbursement-step1-page.component.html',
  styleUrls: ['./reimbursement-step1-page.component.scss'],
})
export class ReimbursementStep1PageComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) {
    console.log('[DEBUG] constructor ReimbursementStep1PageComponent');
  }

  public ngOnInit(): void {
    console.log('[DEBUG] ngOnInit ReimbursementStep1PageComponent');
  }

  public ngOnDestroy(): void {
    console.log('[DEBUG] ngOngOnDestroynInit ReimbursementStep1PageComponent');
  }

  public nextStep() {
    this.router.navigate([
      // tslint:disable-next-line: max-line-length
      `${REIMBURSEMENT_PAGE}/${REIMBURSEMENT_CHILD_PAGE}/FAKEID/${REIMBURSEMENT_CHILD_STEP2_PAGE}`,
    ]);
  }
}
