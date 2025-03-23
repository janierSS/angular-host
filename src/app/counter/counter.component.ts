import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectCount } from './counter.selectors';
import { decrement, increment } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CounterComponent implements OnInit, OnDestroy {
  private store = inject(Store);

  count$: Observable<number> = this.store.select(selectCount);
  countSubscription: Subscription;

  counterCE: any;

  ngOnInit(): void {
    this.counterCE = document.querySelector('counter-feature');
    this.countSubscription = this.count$.subscribe((count) => {
      this.counterCE.count = count;
    });
  }

  ngOnDestroy(): void {
    this.countSubscription.unsubscribe();
  }

  @HostListener('window:increment', ['$event'])
  increment() {
    this.store.dispatch(increment());
  }

  @HostListener('window:decrement', ['$event'])
  decrement() {
    this.store.dispatch(decrement());
  }
}
