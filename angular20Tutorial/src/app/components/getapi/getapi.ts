import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [],
  templateUrl: './getapi.html',
  styleUrl: './getapi.css'
})
export class Getapi implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];
  todoItemsList: any[] = [];

  ngOnInit(): void {
    debugger;
    this.getUsers();
    this.getTodoItems();
  }

  getUsers(){
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any) => {
      debugger;
      this.userList = result;
    });
  }
  
  getTodoItems()
  {
    this.http.get('http://jsonplaceholder.typicode.com/todos').subscribe((res:any)=>{
      this.todoItemsList = res;
    });
  }
}
