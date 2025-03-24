import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectCounterA } from '../counter.selectors';
import { decrementA, incrementA } from '../counter.actions';

@Component({
  selector: 'app-counter-a',
  templateUrl: './counter-a.component.html',
  styleUrls: ['./counter-a.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CounterAComponent implements OnInit, OnDestroy {
  private store = inject(Store);

  count$: Observable<number> = this.store.select(selectCounterA);
  countSubscription: Subscription;

  counterCE: any;

  ngOnInit(): void {
    this.counterCE = document.querySelector('counter-a-feature');
    this.countSubscription = this.count$.subscribe((count) => {
      this.counterCE.count = count;
    });
  }

  increment() {
    this.store.dispatch(incrementA());
  }

  decrement() {
    this.store.dispatch(decrementA());
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }
}
