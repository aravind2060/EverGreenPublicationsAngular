import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { Admin } from 'src/app/models/admin';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private manageUsersService:ManageUsersService) { }
  admins:Admin[]=[];
  ngOnInit(): void {
    this.manageUsersService.getAllUsers().subscribe(
      (data)=>{this.admins=data}
    );
  }
  
  checkAddAdmin: boolean = false;
  checkManageAdmin: boolean = false;
  public toggleAddAdmin(): void {
    if (this.checkAddAdmin == false) {
      this.checkAddAdmin = true;
      this.checkManageAdmin = false;
    }
  }
  public toggleManageAdmin(): void {
    if (this.checkManageAdmin == false) {
      this.checkAddAdmin = false;
      this.checkManageAdmin = true;
    }
  }
}
