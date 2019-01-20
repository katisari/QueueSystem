import { Component, OnChanges} from '@angular/core';
import * as $ from './../../node_modules/jquery';
import {HttpService} from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'public';
  user_name = "Login/Register";
  constructor(private _httpService: HttpService,
    private _router: Router) { }

  
}
