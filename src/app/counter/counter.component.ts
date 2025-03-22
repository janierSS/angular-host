import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit } from '@angular/core';

type CounterProps = {
  count: number;
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CounterComponent implements OnInit {
  count: number = 0;

  counterCE: any

  constructor() {}

  ngOnInit(): void {
    this.counterCE = document.querySelector('counter-feature'); 
    this.counterCE.count = this.count
  }

  @HostListener('window:increment', ['$event'])
  increment() {
    this.count++;
    this.counterCE.count = this.count
  }

  @HostListener('window:decrement', ['$event'])
  decrement() {
    this.count--;
    this.counterCE.count = this.count
  }
}
