import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountersState } from './counter.reducer';


export const selectCounters = createFeatureSelector<CountersState>('counters');

export const selectCounterA = createSelector(
  selectCounters,
  (state) => state.counterA
);

export const selectCounterB = createSelector(
  selectCounters,
  (state) => state.counterB
);
