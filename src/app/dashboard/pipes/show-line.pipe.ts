import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showLine'
})
export class ShowLinePipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    if (value === 0 || value.length === 0) return '-';
    return value;
  }

}