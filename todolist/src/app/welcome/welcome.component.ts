import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Student} from './Student'
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  username = "";
  students : Student[];
  constructor(private route:ActivatedRoute,private sd:DataService) { }
  ngOnInit() {
    this.username = this.route.snapshot.params["name"];
  }

  display(){
        this.sd.getAllData().subscribe(response=>this.students=response);


  //  this.students = [
  //     new Student(1,"Bala Prasad",26),
  //     new Student(2,"Ajay Gaikwad",18),
  //     new Student(3,"Omkar Khandeshe",20),
  //     new Student(4,"Atul Araskar",23)
  //   ]
  }

}
