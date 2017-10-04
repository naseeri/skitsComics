import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starWord'
})
export class StarWordPipe implements PipeTransform {

  transform(value: any, weird?: any): any {
    if(weird) {
      return '֍ ' + value + ' ֍';
    }

    return '* ' + value + ' *';
  }

}
