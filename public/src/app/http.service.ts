import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  addNewHelp(newHelp) {
    return this._http.post('/createHelp', newHelp);
  }

  addNewUser(newUser) {
    return this._http.post('/createUser', newUser);
  }


  getLoggedUser() {
    return this._http.get('/getLoggedUser');
  }

}
