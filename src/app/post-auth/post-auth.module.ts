import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { PostAuthComponent } from './post-auth.component';
import { LayoutModule } from '../layouts/layout.module';


@NgModule({
  declarations: [PostAuthComponent],
  imports: [
    CommonModule,
    PostAuthRoutingModule,
    LayoutModule
  ]
})
export class PostAuthModule { }
