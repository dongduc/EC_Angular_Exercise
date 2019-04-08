import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string): any {
    let array: any[] = value.split('\n', 1000);
    return array;
  }

}
