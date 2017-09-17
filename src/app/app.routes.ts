import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: AppComponent },
  { path: '**',    component: NoContentComponent },
];
