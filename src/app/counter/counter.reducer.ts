// src/app/counters.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { incrementA, decrementA, incrementB, decrementB } from './counter.actions';

export interface CountersState {
  counterA: number;
  counterB: number;
}

export const initialState: CountersState = {
  counterA: 0,
  counterB: 0,
};

export const countersReducer = createReducer(
  initialState,
  on(incrementA, (state) => ({ ...state, counterA: state.counterA + 1 })),
  on(decrementA, (state) => ({ ...state, counterA: state.counterA - 1 })),
  on(incrementB, (state) => ({ ...state, counterB: state.counterB + 1 })),
  on(decrementB, (state) => ({ ...state, counterB: state.counterB - 1 }))
);
