import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.scss'],
})
export class RecordDetailComponent implements OnInit, OnDestroy {
  recordForm: FormGroup;
  buttonActionName = 'Add';
  private unsubscribe: Subject<any> = new Subject<any>();

  constructor(private appService: AppService) {
    this.recordForm = new FormGroup({
      fName: new FormControl(''),
      mName: new FormControl(''),
      lName: new FormControl(''),
      contact: new FormControl(''),
      alternateContact: new FormControl(''),
      address: new FormControl(''),
      locality: new FormControl(''),
      taluka: new FormControl(''),
      occupation: new FormControl(''),
      employer: new FormControl(''),
      comment: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.appService
      .getData()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: any) => {
        console.log(data);
        if (data) {
          this.buttonActionName = 'Modify';
          this.recordForm.setValue({
            fName: data.firstName,
            mName: data.middleName,
            lName: data.lastName,
            contact: data.mobileNo,
            alternateContact: data.altMobileNo,
            address: data.completeAddress,
            locality: data.locality,
            taluka: data.taluka,
            occupation: data.occupation,
            employer: data.employer,
            comment: data.comments,
          });
        }
      });
  }

  reset() {
    this.recordForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(null);
  }
}
