import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-modules';
import { AppComponent } from './app.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BarRatingModule } from "ngx-bar-rating";
import { DetailComponent } from './benchmark/detail/detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AdvisoryComponent } from './advisory/advisory.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    AppComponent,
    BenchmarkComponent,
    DetailComponent,
    AdvisoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    BarRatingModule,
    MatDialogModule,
    HttpClientModule,
    MatAutocompleteModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
