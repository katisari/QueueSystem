import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = {name: "", email: "", password: ""};
  all_list = [];
  constructor(private _httpService: HttpService,
    private _router: Router, private _appComp: AppComponent) { }

  ngOnInit() {
    this.newUser = {name: "", email: "", password: ""};
  }

  createUser() {
    let observable = this._httpService.addNewUser(this.newUser);
    observable.subscribe(data => {
      // console.log("THIS MY DATA FOR CREATEUSER" + data);
      this.all_list.push(data);
      this._appComp.user_name = "Welcome " + this.newUser.name + "!";
      // console.log(this.newUser.name);
      this._router.navigate(['/spots']);
      // if (data['status'] == 200) {
      //   this._router.navigate(['/restaurants']);
      // } else {
      //   console.log("went in here")
      //   this.error = data['errors'];
      // }
    })
  }

  

}
