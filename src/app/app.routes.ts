import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterLoader } from './counter/counter-loader';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  {
    path: 'counter',
    component: CounterComponent,
    canActivate: [CounterLoader],
  },
];
