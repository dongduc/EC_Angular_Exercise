import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: User[], sortBy: string, sortValue: number): any {
    if (sortBy === 'firstName') {
      value.sort((a, b) => {
        if (a.firstName > b.firstName) return sortValue;
        else if (a.firstName < b.firstName) return -sortValue;
        else return 0;
      });
    } else if (sortBy === 'lastName') {
      value.sort((a, b) => {
        if (a.lastName > b.lastName) return sortValue;
        else if (a.lastName < b.lastName) return -sortValue;
        else return 0;
      });
    } else if (sortBy === 'email') {
      value.sort((a, b) => {
        if (a.email > b.email) return sortValue;
        else if (a.email < b.email) return -sortValue;
        else return 0;
      });
    } else if (sortBy === 'birtday') {
      value.sort((a, b) => {
        if (a.birthday > b.birthday) return sortValue;
        else if (a.birthday < b.birthday) return -sortValue;
        else return 0;
      });
    } else if (sortBy === 'salary') {
      value.sort((a, b) => {
        if (a.salary > b.salary) return sortValue;
        else if (a.salary < b.salary) return -sortValue;
        else return 0;
      });
    } else if (sortBy === 'phone') {
      value.sort((a, b) => {
        if (a.phone > b.phone) return sortValue;
        else if (a.phone < b.phone) return -sortValue;
        else return 0;
      });
    } else if (sortBy === 'gender') {
      value.sort((a, b) => {
        if (a.gender > b.gender) return sortValue;
        else if (a.gender < b.gender) return -sortValue;
        else return 0;
      });
    }
    return value;
  }

}
