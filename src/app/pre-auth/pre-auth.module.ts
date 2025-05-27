import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { LayoutModule } from '../layouts/layout.module';
import { PreAuthComponent } from './pre-auth.component';

@NgModule({
  declarations: [PreAuthComponent],
  imports: [
    CommonModule,
    PreAuthRoutingModule,
    // LayoutModule
  ]
})
export class PreAuthModule { }
