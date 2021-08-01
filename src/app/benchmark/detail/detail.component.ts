import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private http: HttpClient) { }
  baseUrl = 'http://refinitiv.test/api/';
  company: any;
  rank: any;
  totalrank: any;
  ngOnInit(): void {
    this.getCompany() 
  }
  getCompany() {
   
    this.http.get<any[]>(this.baseUrl+'companyid/' + this.data.id  ).subscribe(
      (response:any) => {
        this.company = response.company;                       //Next callback
        this.rank = response.rank;                       //Next callback
        this.totalrank = response.total;                       //Next callback
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
      },
      () => {                                   //Complete callback
      })
  }
}
