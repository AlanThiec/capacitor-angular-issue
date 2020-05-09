import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REIMBURSEMENT_PAGE, REIMBURSEMENT_CHILD_PAGE, REIMBURSEMENT_CHILD_STEP1_PAGE } from 'src/app/constants';

@Component({
  selector: 'mwh-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {
  }

  public navigate() {
    this.router.navigate([
      `${REIMBURSEMENT_PAGE}/${REIMBURSEMENT_CHILD_PAGE}/FAKEID/${REIMBURSEMENT_CHILD_STEP1_PAGE}`
    ]);
  }
}
