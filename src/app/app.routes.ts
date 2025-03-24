import { Routes } from '@angular/router';
import { CounterLoader } from './counter/counter-loader';
import { CounterExamplesComponent } from './counter/counter-examples/counter-examples.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  },
  {
    path: 'counter',
    component: CounterExamplesComponent,
    canActivate: [CounterLoader],
  },
];
