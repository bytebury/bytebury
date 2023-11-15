import { Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
];
