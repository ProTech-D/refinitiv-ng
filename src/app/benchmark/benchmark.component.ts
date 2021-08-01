import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  esg: number;
  rank: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', esg: 1.0079, rank: 2},
  {position: 2, name: 'Helium', esg: 4.0026, rank: 1},
  {position: 3, name: 'Lithium', esg: 6.941, rank: 4},
  {position: 4, name: 'Beryllium', esg: 9.0122, rank: 4},
  {position: 5, name: 'Boron', esg: 10.811, rank: 3},
  {position: 6, name: 'Carbon', esg: 12.0107, rank: 2},
  {position: 7, name: 'Nitrogen', esg: 14.0067, rank: 4},
  {position: 8, name: 'Oxygen', esg: 75.9994, rank: 2},
  {position: 9, name: 'Fluorine', esg: 18.9984, rank: 3},
  {position: 10, name: 'Neon', esg: 20.1797, rank: 1},
];

import { DetailComponent } from './detail/detail.component';
@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {

  selectedValue: string = '';
  displayedColumns: string[] = [ 'name', 'esg', 'rank'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  getRecord(dt: any) {
    const dialogRef = this.dialog.open(DetailComponent,{
      width: '950px',
      data: dt
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log(dt);
  }
}
