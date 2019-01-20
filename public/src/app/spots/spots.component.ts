import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {
  reg = {Project_Name: "", Date: "", Method: ""};
  all_list = [];

  constructor(private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.reg = {Project_Name: "", Date: "", Method: ""};
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
}
