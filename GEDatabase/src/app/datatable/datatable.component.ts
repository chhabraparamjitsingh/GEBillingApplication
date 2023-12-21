import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppService } from 'src/shared/services/app.service';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit, OnDestroy {
  jsonDataResult: any;
  searchResult:any;
  fileLocation: string = '/assets/json/AllCustomerRecords.json';
  modalRef: any;
  pinNumber = '';
  searchButtonEventSubscription:Subscription;
  //resetButtonEventSubscription:Subscription;

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private router: Router,
    private appService: AppService,
    private sharedService:SharedService,
    private sharedService2:SharedService
  ) {
    this.searchButtonEventSubscription = this.sharedService.getKeyPressEvent()
          .subscribe(()=>{this.onKeyPress();})
    console.log(this.searchButtonEventSubscription);      
    // this.resetButtonEventSubscription = this.sharedService2.getResetEvent()
    //       .subscribe(()=>{this.onReset();})
    // console.log(this.resetButtonEventSubscription);  
  }

  //Fetch all the customer records from the Database while loading the page
  ngOnInit(): void {
    this.fetchAllCustomerRecords();
  }

  //This function fetches all the customer records from the Database
  fetchAllCustomerRecords(){
    this.http.get(this.fileLocation)
                .subscribe((res) => {
                    this.jsonDataResult = res;
                    this.searchResult = this.jsonDataResult;
                    //console.log('--- result :: ', this.jsonDataResult);  
                });
  }

  onReset(){
    console.log('The reset button has been called successfully');
    this.fetchAllCustomerRecords();
  }

  onKeyPress(){
    this.searchResult = [];
    for (let i = 0; i < this.jsonDataResult.length; i++) {
      let testString = '9637966543';
      //console.log('Record No:', i, '- Mobile No.: ', this.jsonDataResult[i].MobileNo );
    
      if (this.jsonDataResult[i].MobileNo == testString){
        this.searchResult.push(this.jsonDataResult[i]);
        console.log(this.searchResult[0]);
      }
    }
  }

  open(data: any, template: TemplateRef<any>) {
    // console.log('data cust', data);
    this.modalRef = this.modalService.show(template);
  }

  confirmDeletion() {
    this.modalService.hide();
  }

  close() {
    this.modalService.hide();
  }

  edit(cust: any) {
    this.appService.setData(cust);
    this.router.navigate(['record-detail']);
  }

  ngOnDestroy(): void {}
}
