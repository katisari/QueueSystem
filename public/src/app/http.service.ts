import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addnewUserLong(newUser) {
    return this._http.post('/helps', newUser);
  }


  addnewHelpLong(newHelp) {
    return this._http.post('/users', newHelp);
  }


}
