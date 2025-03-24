import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementB, incrementB } from '../counter.actions';
import { selectCounterA, selectCounterB } from '../counter.selectors';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-b',
  templateUrl: './counter-b.component.html',
  imports: [CommonModule],
  styleUrls: ['./counter-b.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CounterBComponent {
  private store = inject(Store);
  count$: Observable<number> = this.store.select(selectCounterB);

  @HostListener('window:increment-b', ['$event'])
  increment() {
    this.store.dispatch(incrementB());
  }

  @HostListener('window:decrement-b', ['$event'])
  decrement() {
    this.store.dispatch(decrementB());
  }
}
