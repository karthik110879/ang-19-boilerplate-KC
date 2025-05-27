import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
