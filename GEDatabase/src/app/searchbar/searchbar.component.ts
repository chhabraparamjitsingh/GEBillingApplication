import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { AppService } from 'src/shared/services/app.service';
import { DatatableComponent } from '../datatable/datatable.component';
import { SharedService } from '../shared.service';


@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent //implements OnInit 
{
  searchForm: FormGroup;

  constructor(
   private SharedService:SharedService
   //private SharedService2:SharedService
  ) {
    this.searchForm = new FormGroup({
      searchKey: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    //let datatableObject = new DatatableComponent();
  }


  search() {
    console.log("This is a console log test");
    //console.log(this.searchForm.get('searchKey')?.value);
    this.SharedService.sendKeyPressEvent();
  }
  resetTable() {
    console.log("This is a reset Table function");
    //this.SharedService.getResetEvent();
  }
}
