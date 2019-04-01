import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { TableServiceService } from '../service/table-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public sortBy: string = 'id'; //First Name, LastName, Email,..
  public sortValue: number = 1; // 1 tăng, -1 giảm 
  public users: User[] = [];

  constructor(private tableService: TableServiceService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.users = this.tableService.getAll();
  }

  onSort(col){
    this.sortBy = col;
    this.sortValue = -this.sortValue;
    console.log(this.sortBy);
    console.log(this.sortValue);
  }

}
