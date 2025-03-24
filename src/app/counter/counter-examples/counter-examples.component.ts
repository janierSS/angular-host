import { Component } from '@angular/core';
import { CounterAComponent } from "../counter-a/counter-a.component";
import { CounterBComponent } from "../counter-b/counter-b.component";

@Component({
  selector: 'app-counter-examples',
  imports: [CounterAComponent, CounterBComponent],
  templateUrl: './counter-examples.component.html',
  styleUrl: './counter-examples.component.scss'
})
export class CounterExamplesComponent {

}
