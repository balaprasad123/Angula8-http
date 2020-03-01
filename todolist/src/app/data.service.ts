import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './welcome/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllData(){
   return  this.http.get<Student[]>("https://localhost:8086/student/read/all");
  }
}
