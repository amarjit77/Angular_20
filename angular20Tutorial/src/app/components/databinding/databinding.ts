import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  coursName: string = "Data Binding";
  itemName = "Item 1";
  productPrice: number = 12500;
  maxlength = 5;
  minlength = 3;
  inputType: string = "checkbox";
  myClass = "myClass";

  btnWelcome = "Welcome";

  showWelcomeMessage(){
    alert("Welcome Amar, Have a nice day!!!");
  }

  changeCourseName()
  {
    this.coursName = "Angular- Data Binding"
  }

  onCityChange()
  {
    alert("City changed");
  }
}
