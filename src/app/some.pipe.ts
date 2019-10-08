import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'some'
})
export class SomePipe implements PipeTransform {
  constructor(datePipe: DatePipe) {

  }
  transform(value: any, ...args: any[]): any {
    return null;
  }
}
