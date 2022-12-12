import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  todos: Todo[] = [];
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public todoService: TodoService) { }
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.todoService.getAll().subscribe((data: Todo[])=>{
      this.todos = data;
      console.log(this.todos);
    })  
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.todoService.delete(id).subscribe(res => {
         this.todos = this.todos.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
}
