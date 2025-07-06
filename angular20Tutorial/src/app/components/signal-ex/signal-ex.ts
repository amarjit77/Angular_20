import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Amar";
  productName = "Airtel";

  coursName =  signal<string>("Angular");
  courseDuration = signal("20 Videos");

  courseDetails = computed(()=> this.coursName() + " " + this.courseDuration());

  constructor()
  {
    this.firstName = "Amar Kamble";
    console.log(this.firstName);
    console.log(this.coursName());

    this.coursName.set("Angular 20");
    console.log(this.coursName());

    setTimeout(() =>{
      this.coursName.set("New Angular 20 Batch");
      console.log(this.coursName());
    }, 5000);

  }
}
