import { Pipe, PipeTransform } from '@angular/core';
import { SomeService } from './some.service';
@Pipe({
  name: 'some'
})
export class SomePipe implements PipeTransform {
  constructor(someService: SomeService) {
    console.log('>> created, dependency instance: ', someService);
  }
  transform(value: any, ...args: any[]): any {
    return 'x';
  }
}
