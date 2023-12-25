import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
}) //implements OnInit
export class SearchbarComponent {
  searchForm: FormGroup;

  constructor(private appService: AppService) {
    this.searchForm = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      mName: new FormControl('', Validators.required),
      mobileNo: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      locality: new FormControl('', Validators.required),
      taluka: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      employer: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    //let datatableObject = new DatatableComponent();
  }

  resetTable() {
    console.log('This is a reset Table function');
  }

  filterEmptyFields(data: any): any {
    let fields: any = {};
    Object.keys(data).forEach((key) =>
      data[key] != '' ? (fields[key] = data[key]) : key
    );
    return fields;
  }
}
