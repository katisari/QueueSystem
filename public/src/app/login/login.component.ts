import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';
import * as $ from '../../../node_modules/jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = {first: ""};

  constructor() { }

  ngOnInit() {
    this.newUser = {first: ""};
  }
  submitRegister() {
    $('.name_reserved').html("Welcome " + this.newUser.first);

  }

}
