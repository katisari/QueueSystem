import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Router } from '@angular/router';
import {AppComponent } from '../app.component';
import * as io from '../../../node_modules/socket.io-client';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {
  reg = {Student_Name: "", Project_Name: "", Date: "", Method: ""};
  all_list = [];
  count = 0;
  logged_user = "";
  socket: any;
  
  // socket: SocketIOClient.Socket;
  show_circle = false;

  constructor(private _httpService: HttpService,
    private _router: Router, private _appComp : AppComponent) {
      this.socket = io.connect();
     }

  ngOnInit() {
    if (this.logged_user == "") {
      this.getName();
    }
    this.all_list = [];
    this.reg['Student_Name'] = this.logged_user;
    // this.reg = {Student_Name: this.logged_user, Project_Name: "", Date: "Select a Date", Method: "Choose Help Method"};
    this.socket.emit('newUser');
    this.socket.on('setHelpsArray', (data: any) => {
      this.all_list = data.msg;
      this.count = this.all_list.length;
      
    });
    this.socket.on('setNewSpot', (data: any) => {
      this.all_list = data.msg;
      this.count = this.all_list.length;
      
    });
    this.socket.on('setDeleteSpot', (data: any) => {
      console.log("goes into delete");
      this.all_list = data.theArray;
      this.count = this.all_list.length;
      // this.deleteSpot(data.msg);
      
    });
    
    
  }
  

  submitSpot() {
    let observable = this._httpService.addNewHelp(this.reg);
    observable.subscribe(data => {
      console.log(data);
      // this.all_list.push(data);
      console.log(this.all_list);
      this.socket.emit('newSpotSubmitted', {msg: this.reg});
      // if (data['status'] == 200) {
      //   this._router.navigate(['/restaurants']);
      // } else {
      //   console.log("went in here")
      //   this.error = data['errors'];
      // }
    })

  }
  deleteSpot(id) {
    console.log("COME ON");
    var index = 0;
    for (let individ of this.all_list) {
      if (individ.id == id) {
        // this.all_list.splice(index, 1);
        this.socket.emit('deleteSpot', {
          msg: index
        });
      }
      index = index + 1;
    }

  }
  onclick(){
    this.show_circle = true;
    console.log("Here");                                                                                                                                                                                                                                                                                                                                                             
  }
  getName() {
    if (this.logged_user == "") {
      this.logged_user = this._appComp.user_name.split("Welcome ")[1];
    }

  }

  
}