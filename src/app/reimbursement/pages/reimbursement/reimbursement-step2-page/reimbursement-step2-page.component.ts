import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mwh-reimbursement-step2-page',
  templateUrl: './reimbursement-step2-page.component.html',
  styleUrls: ['./reimbursement-step2-page.component.scss'],
})
export class ReimbursementStep2PageComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('[DEBUG] constructor ReimbursementStep2PageComponent');
  }

  public ngOnInit() {
    console.log('[DEBUG] ngOnInit ReimbursementStep2PageComponent');
  }

  public ngOnDestroy(): void {
    console.log('[DEBUG] ngOnDestroy ReimbursementStep2PageComponent');
  }
}
