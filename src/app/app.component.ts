import { SomePipe } from './some.pipe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'with-ivy';

  constructor(private somePipe: SomePipe) {
    console.log(somePipe.transform('x'));
  }
}
