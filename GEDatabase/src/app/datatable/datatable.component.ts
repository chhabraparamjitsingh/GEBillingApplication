import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit, OnDestroy {
  jsonDataResult: any;
  modalRef: any;
  pinNumber = '';

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.http.get('/assets/json/AllCustomerRecords.json').subscribe((res) => {
      this.jsonDataResult = res;
      // console.log('--- result :: ', this.jsonDataResult);
    });
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
