import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreAuthComponent } from './pre-auth.component';

const routes: Routes = [
  {
    path: '',
    component: PreAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('../features/login/login.component').then(m => m.LoginComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreAuthRoutingModule { }
