import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';
import {AppComponent } from '../app.component';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {
  reg = {Project_Name: "", Date: "Select a Date", Method: "Choose Help Method"};
  all_list = [];
  count = 0;
  logged_user = "";

  constructor(private _httpService: HttpService,
    private _router: Router, private _appComp : AppComponent) { }

  ngOnInit() {
    this.reg = {Project_Name: "", Date: "Select a Date", Method: "Choose Help Method"};
    this.getName();
    
  }

  submitSpot() {
    let observable = this._httpService.addNewHelp(this.reg);
    observable.subscribe(data => {
      console.log(data);
      this.all_list.push(data);
      console.log(this.all_list);
      // if (data['status'] == 200) {
      //   this._router.navigate(['/restaurants']);
      // } else {
      //   console.log("went in here")
      //   this.error = data['errors'];
      // }
    })

  }
  deleteSpot(id) {
    var index = 0;
    for (let individ of this.all_list) {
      if (individ.id == id) {
        this.all_list.splice(index, 1);
      }
      index = index + 1;
    }
  }
  getName() {
    this.logged_user = this._appComp.user_name.split("Welcome ")[1];
  }

  
}
