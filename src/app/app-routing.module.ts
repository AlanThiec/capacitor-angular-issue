import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContainerComponent } from './page-container/page-container.component';
import { HOME_PAGE, REIMBURSEMENT_PAGE } from './constants';


const routes: Routes = [
  {
    path: '',
    component: PageContainerComponent,
    children: [
      {
        path: '',
        redirectTo: HOME_PAGE,
        pathMatch: 'full',
      },
      {
        path: HOME_PAGE,
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: REIMBURSEMENT_PAGE,
        loadChildren: () => import('./reimbursement/reimbursement.module').then((m) => m.ReimbursementModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: HOME_PAGE,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
