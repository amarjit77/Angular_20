import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postapi',
  imports: [FormsModule],
  templateUrl: './postapi.html',
  styleUrl: './postapi.css'
})
export class Postapi implements OnInit {
  
  http = inject(HttpClient);
  userList: any[]= [];

  userObj: any = {
  "id": 0,
  "role": "",
  "description": ""
}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.http.get('http://localhost:5117/api/User').subscribe((res:any)=>{
      debugger;
      this.userList = res;
    });
  }

  SaveRole()
  {
    debugger;
    this.http.post('http://localhost:5117/api/User', this.userObj).subscribe({
      next:(res)=>{
      alert('Role saved successfully');
      this.getUsers();
    },
    error:(error)=>{
      alert("Error: " + error);
    }
  });
  }

  Reset()
  {
    this.userObj.role = "";
    this.userObj.description = "";
  }
}
