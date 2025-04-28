import { Routes } from '@angular/router';
import {SiteLayoutComponent} from './site-layout-component/site-layout.component'
import {GuardComponent} from './guard-component/guard.component';
import {HomeComponent} from './home/home.component';


export const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '',           component: GuardComponent,           pathMatch: 'full' },
      { path: 'gard',           component: GuardComponent,           pathMatch: 'full' },
      { path: 'home',           component: HomeComponent,           pathMatch: 'full' }
    ]
  }
];

export class AppRoutingModule { }
