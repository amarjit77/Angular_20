import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, 
    JsonPipe, DecimalPipe, DatePipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {

  strMessage: string = "";
  rollNoList = [10, 15, 5, 45, 85, 11, 100];

  employeeObj:any = {
    name: 'Amar',
    age: 35,
    contact: '9730457088'
  }

  amount: number = 115646565;

  currDate: Date = new Date;

}
