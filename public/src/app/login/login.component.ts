import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';
import * as $ from '../../../node_modules/jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = {name: "", email: "", password: ""};
  constructor(private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.newUser = {name: "", email: "", password: ""};
  }

  createUser() {
    const observable = this._httpService.addnewUserLong(this.newUser);
    observable.subscribe((data: any) => {
      console.log('Added a new user. Result:', data);
      // const observable2 = this._httpService.addUser(data.data[data.data.length - 1]._id, {name: this.create_name});
      // observable2.subscribe((data2: any) => {
      //   console.log('Added a user. Result:', data2);
      //   this._shareService.setUser(data2.data._id, this.create_name);
      //   this._router.navigate(['/dashboard/' + data.data[data.data.length - 1]._id + '/welcome']);
      // });
    });
  }

  submitRegister() {
    $('.name_reserved').html("Welcome " + this.newUser.name);

  }

}
