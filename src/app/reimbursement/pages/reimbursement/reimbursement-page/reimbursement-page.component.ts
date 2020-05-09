import { Component, OnInit } from '@angular/core';

// TODO WEB: Make guard/resolver to check if contract exists and is eligible to this feature,
// a guard to check if the user as already completed some steps and can go directly
// to the second step for example.

@Component({
  selector: 'mwh-reimbursement-page',
  templateUrl: './reimbursement-page.component.html',
  styleUrls: ['./reimbursement-page.component.scss'],
})
export class ReimbursementPageComponent implements OnInit {
  constructor(
  ) {
    console.log('[DEBUG] constructor ReimbursementPageComponent');
  }

  public ngOnInit() {
    console.log('[DEBUG] ngOnInit ReimbursementPageComponent');
  }

  public back() {
    window.history.back();
  }
}
