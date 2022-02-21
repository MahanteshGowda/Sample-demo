import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  public todoId: string | undefined;
  public todoDetail = <Todo>{};
  public mode: string | undefined;    
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.todoId = params['id'];
          if (this.todoId !== undefined) {
                this.getTodoDetailById(this.todoId);
                this.mode = 'Edit';    
          } else {
                this.todoDetail['id'] = 0;
                this.mode = 'Add';   
          }
        }); 
  }
  
  getTodoDetailById(id: string) {
    this.todoDetail = this.todoService.getTodoById(parseInt(id));
    console.log(this.todoDetail);  
  }
  
  onTodoSubmitForm(form: { valid: any; }) {
    console.log(form);
    if(form.valid) {
        this.todoService.updateTodoById(this.todoDetail);
        this.router.navigate(['/todo-list']);
    } else {
    
    }
  }
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }
}
