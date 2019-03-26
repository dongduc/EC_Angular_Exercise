import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneNumber): any {
    phoneNumber = phoneNumber.charAt(0) != 0 ? '(+84) ' + phoneNumber : '' + phoneNumber;
    
    return phoneNumber? phoneNumber.replace(/-/g, "") : phoneNumber;
  }

}
