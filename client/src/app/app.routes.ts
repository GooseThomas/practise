import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router'
import {SiteLayoutComponent} from './site-layout-component/site-layout.component'
import {GuardComponent} from './guard-component/guard.component';


export const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'abb',           component: GuardComponent,           pathMatch: 'full' }
    ]
  }
];
