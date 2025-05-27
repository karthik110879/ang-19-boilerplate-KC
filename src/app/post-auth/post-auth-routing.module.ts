import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAuthComponent } from './post-auth.component';
import { ToDoComponent } from '../features/to-do/to-do.component';

const routes: Routes = [
  {
    path: '',
    component: PostAuthComponent,
    children: [
      {
        path: 'home',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('../features/to-do/to-do.component').then(m => m.ToDoComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostAuthRoutingModule { }
