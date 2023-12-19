import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent //implements OnInit 
{
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      searchKey: new FormControl('', Validators.required),
    });
  }

 // ngOnInit(): void {
  //}


  search() {
    alert("This is being tested");
    console.log(this.searchForm.get('searchKey')?.value);
  }
}
