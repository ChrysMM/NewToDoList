import { Component, OnInit } from '@angular/core';
 
//je creé mon component et son template en html
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  task:  string ="test";
  toDoList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
   addTask(){
     this.toDoList.push(this.task);
   }
}
