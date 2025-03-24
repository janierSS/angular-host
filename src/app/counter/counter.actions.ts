import { createAction } from '@ngrx/store';

export const incrementA = createAction('[Counter A] Increment');
export const decrementA = createAction('[Counter A] Decrement');

export const incrementB = createAction('[Counter B] Increment');
export const decrementB = createAction('[Counter B] Decrement');
