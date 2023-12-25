import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppService } from 'src/shared/services/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit, OnDestroy {
  jsonDataResult: any;
  originalTableData: any;
  fileLocation: string = '/assets/json/AllCustomerRecords.json';
  modalRef: any;
  pinNumber = '';
  tableData: any;
  searchForm: FormGroup;

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private router: Router,
    private appService: AppService
  ) {
    this.searchForm = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      MiddleName: new FormControl('', Validators.required),
      MobileNo: new FormControl('', Validators.required),
      CompleteAddress: new FormControl('', Validators.required),
      Locality: new FormControl('', Validators.required),
      Taluka: new FormControl('', Validators.required),
      Occupation: new FormControl('', Validators.required),
      Employer: new FormControl('', Validators.required),
      Comments: new FormControl('', Validators.required),
    });
  }

  //Fetch all the customer records from the Database while loading the page
  ngOnInit(): void {
    this.fetchAllCustomerRecords();
  }

  //This function is for calling the API
  fetchAllCustomerRecords() {
    this.http.get(this.fileLocation).subscribe((res) => {
      this.tableData = res;
      this.originalTableData = res;
    });
  }

  filterTable(): void {
    const filter = this.searchForm.value;

    this.tableData = this.originalTableData.filter((cust: any) => {
      return (
        cust.FirstName.toLowerCase().includes(filter.FirstName.toLowerCase()) &&
        cust.MiddleName.toLowerCase().includes(
          filter.MiddleName.toLowerCase()
        ) &&
        cust.LastName.toLowerCase().includes(filter.LastName.toLowerCase()) &&
        cust.MobileNo.toLowerCase().includes(filter.MobileNo.toLowerCase()) &&
        cust.CompleteAddress.toLowerCase().includes(
          filter.CompleteAddress.toLowerCase()
        ) &&
        cust.Locality.toLowerCase().includes(filter.Locality.toLowerCase()) &&
        cust.Taluka.toLowerCase().includes(filter.Taluka.toLowerCase()) &&
        cust.Occupation.toLowerCase().includes(
          filter.Occupation.toLowerCase()
        ) &&
        cust.Employer.toLowerCase().includes(filter.Employer.toLowerCase()) &&
        cust.Comments.toLowerCase().includes(filter.Comments.toLowerCase())
      );
    });
  }

  open(data: any, template: TemplateRef<any>) {
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

  onReset(): void {
    this.searchForm.reset();
    this.tableData = this.originalTableData;
  }

  ngOnDestroy(): void {}
}
