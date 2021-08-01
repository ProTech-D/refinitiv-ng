import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Company {
  id: number;
  Shareholders: number;
  TRBC: number;
  Workforce: number;
  community: number;
  csrstrategy: number;
  emission: number;
  humanrights: number;
  innovation: number;
  management: number;
  productresponsibility: number;
  resourceuse: number;
  esgscore: number;
  name: string;
  industry: string;
  country: string;
}
@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css']
})
export class AdvisoryComponent implements OnInit {

  constructor(private http: HttpClient,private cdRef: ChangeDetectorRef) { }
  myControl = new FormControl();
  options: string[] = [];
  companies: Company[] = [];
  selectedCompany: any;
  baseUrl = 'http://refinitiv.test/api/';
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.getCompany();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  getCompany() {
   
    this.http.get<any[]>(this.baseUrl+'getadvisory' ).subscribe(
      (response:any) => {
        this.companies = response;
        this.options = response.map((a: any) => a.name);
        this.cdRef.detectChanges();                     //Next callback
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
      },
      () => {                                   //Complete callback
      })
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  filterCompany(val: string) {
    const found = this.companies.find((element: any) => element.name === val);
    if (found) {
      this.selectedCompany  = found;
    }
   
    console.log(this.selectedCompany.esgscores);
    this.cdRef.detectChanges(); 
  }
}
