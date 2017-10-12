import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
  pure: false
})
export class SortListPipe implements PipeTransform {

  transform(value: any[], propName: string): any {
    if (value == undefined) {
      return value;
    }

    // console.log(value);

    // if(value.length<2) {
    //   return value;
    // }

    return value.sort((a, b) => {
      if(a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
