import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {
  reg = {Project_Name: "", Date: "", Method: ""};
  _http: HttpService;
  constructor() { }

  ngOnInit() {
    this.reg = {Project_Name: "", Date: "", Method: ""};
  }

  submitButton() {

  }
}
