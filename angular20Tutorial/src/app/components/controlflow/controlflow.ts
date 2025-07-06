import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css'
})
export class Controlflow {

  num1: number = 0;
  num2: number = 0;
  total: number = 0;

  flag: boolean= false;

  strMonthName: string = "";

  cities: string[] = ["Pune", "Mumbai", "Nashik", "Kolhapur", "Sangli"];

  studentList: any [] = [
    { name: 'Amar', city: 'Kolhapur', isActive: true},
    { name: 'Sachin', city: 'Pune', isActive: false},
    { name: 'Sagar', city: 'Mumbai', isActive: true}
  ]

  Add(){
    this.flag = true;
    this.total = (this.num1 + this.num2);
  }

  Sub(){
    this.flag = false;
    this.total = this.num1 - this.num2;
  }
}
