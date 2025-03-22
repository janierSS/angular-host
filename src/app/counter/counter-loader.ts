import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CounterLoader implements CanActivate {
  async canActivate(): Promise<boolean | UrlTree> {
    return import(
      /* webpackIgnore: true */ '../../artifacts/index.js'
    )
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}
