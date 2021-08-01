import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


export interface benchmark {
  id: number;
  instrument: string;
  esgscore: number;
  industry: string;
  country: string;
  trbc: number;
}
export interface industry {
  trbc: number;
  industry: string;
}
export interface countries {
  country: string;
}

import { DetailComponent } from './detail/detail.component';
@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {

  selectedValue: string = '';
  displayedColumns: string[] = ['name', 'industry','country', 'esg', 'rank'];
  dataSource : benchmark[] = [];
  allindustries : industry[] = [];
  allcountries : countries[] = [];
  baseUrl = 'http://refinitiv.test/api/';
  industryID: number = 0;
  countryID: string ='null';
  companyname: string ='';

  constructor(public dialog: MatDialog,private http: HttpClient) { }
  ngOnInit(): void {
    this.getBenchmark();
    this.getIndustries();
    this.getCountries();
  }
  getBenchmark() {
    this.http.get<any[]>(this.baseUrl+'all').subscribe(
      (response) => {                           //Next callback
        this.dataSource = response;
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
      },
      () => {                                   //Complete callback
      })
  }
  getIndustries() {
    this.http.get<any[]>(this.baseUrl+'industry').subscribe(
      (response) => {                           //Next callback
        this.allindustries = response;
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
      },
      () => {                                   //Complete callback
      })
  }
  getCountries() {
    this.http.get<any[]>(this.baseUrl+'countries').subscribe(
      (response) => {                           //Next callback
        this.allcountries = response;
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
      },
      () => {                                   //Complete callback
      })
  }
   sorter = (a:any, b:any) => {
    return   b.esgscore - a.esgscore;
  };
  sortByESG = (arr:any[]) => {
    arr.sort(this.sorter);
 };
  getRecord(dt: any) {
    this.sortByESG(this.dataSource);
    const index = this.dataSource.findIndex(x => x.id === dt.id);
    dt.rank = index + 1;
    dt.totalrank = this.dataSource.length;
    const dialogRef = this.dialog.open(DetailComponent,{
      width: '950px',
      data: dt
    });
  }
  filterIndustry(val: number) {
    this.industryID = val;
    this.filter();
   
  }
  filterCountry(val: string) {
    this.countryID = val;
    this.filter();
  }
  processChange(){

    this.filter();
 
 }
  filter() {
    this.dataSource = [];
    let compname;
    if (this.companyname && this.companyname != '') {
       compname = this.companyname;
    }
    else {
       compname = 0;
    }
    this.http.get<any[]>(this.baseUrl+'filter/' + this.industryID + '/' + this.countryID+ '/' + compname ).subscribe(
      (response) => {                           //Next callback
        this.dataSource = response;
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
      },
      () => {                                   //Complete callback
      })
  }
}
