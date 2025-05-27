import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';

@Component({
  selector: 'app-pre-auth',
  standalone:false,
  templateUrl: './pre-auth.component.html',
  styleUrl: './pre-auth.component.scss'
})
export class PreAuthComponent {
 karthik:string = ''

 constructor() {
  this.karthik = 'KARTHIK'


 }
}
