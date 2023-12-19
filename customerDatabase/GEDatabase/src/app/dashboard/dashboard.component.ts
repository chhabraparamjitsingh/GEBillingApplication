import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/shared/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router, private appService: AppService) {}

  addRecord() {
    alert("Test Add Record");
    this.appService.setData(null);
    this.router.navigate(['/record-detail']);
  }
}
