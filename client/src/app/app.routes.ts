import { Routes } from '@angular/router';
import {SiteLayoutComponent} from './site-layout-component/site-layout.component'
import {GuardComponent} from './guard-component/guard.component';
import {HomeComponent} from './home/home.component';
import {normalizeFileReplacements} from '@angular-devkit/build-angular/src/utils';
import {PlaceComponent} from './place/place.component';


export const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '',           component: GuardComponent,           pathMatch: 'full' },
      { path: 'gard',           component: GuardComponent,       pathMatch: 'full' },
      { path: 'place',          component: PlaceComponent,       pathMatch: 'full' },
      { path: 'home',           component: HomeComponent,        pathMatch: 'full' }
    ]
  }
];

export class AppRoutingModule { }
