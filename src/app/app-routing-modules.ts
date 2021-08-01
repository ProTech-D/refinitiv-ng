import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { AdvisoryComponent } from './advisory/advisory.component';


const routes: Routes = [
    {path: '', component: BenchmarkComponent},
    {path: 'advisory', component: AdvisoryComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }