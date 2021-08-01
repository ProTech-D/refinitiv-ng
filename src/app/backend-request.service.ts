import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://refinitiv.test/api/';

  public getBenchmark() {
    return this.http.get<any[]>(this.baseUrl+'all')    
  }


}
