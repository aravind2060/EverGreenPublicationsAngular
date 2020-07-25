import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from 'src/app/services/manage-users.service';
import { QueryResponseDTO } from 'src/app/models/query-response-dto';
import { ExceptionResponseDTO } from 'src/app/models/exception-response-dto';
import { CustomerInformation } from 'src/app/models/customer-information';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
 
   public queryResponse:QueryResponseDTO;
   public exceptionResponse:ExceptionResponseDTO;
   public noOfPages=[];

  constructor(private manageUsersService:ManageUsersService) { }

  ngOnInit(): void {
    this.getAllCustomers(1);
  }

  checkAddCustomer: boolean = false;
  checkManageCustomer: boolean = false;

  public toggleAddCustomer(): void {
    if (this.checkAddCustomer == false) {
      this.checkAddCustomer = true;
      this.checkManageCustomer = false;
    }
  }
  public toggleManageCustomer(): void {
    if (this.checkManageCustomer == false) {
      this.checkAddCustomer = false;
      this.checkManageCustomer = true;
    }
  }


  /**
  * Method:getAllCustomers 
  * is to fetch customers data if admin credentials are valid
  */
 public getAllCustomers(pageNumber:number)
 {
    this.manageUsersService.getAllCustomers("aravind@gmail.com","Aravind@123",100,pageNumber).subscribe(
      (data:QueryResponseDTO)=>
      {
        this.queryResponse=data;
        this.noOfPages=new Array(this.queryResponse.totalNoOfPages);
        console.log(this.queryResponse);

      },(error)=>{
        this.exceptionResponse=error.error;
        console.log(this.exceptionResponse.reason);
      }
    );
 }
 
  updateCustomer(customer:CustomerInformation)
  {

  }
  deleteCustomer(customer:CustomerInformation)
  {

  }
}
