import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

    public todos: Todo[] = [];
    constructor() { }
  
    getAllTodos(): Todo[] {

        if(localStorage.getItem('localData') !== null){ 
            this.todos = JSON.parse(localStorage.getItem('localData') || '{}');
        } else {
            var todoArrayData = [
                {
                    id: 1,
                    title: 'Create a Repo',
                    description: 'Create an repository for an angular application',
                    dueDate: '22-02-2022',
                    remarks: 'NA'
                },
                {
                    id: 2,
                    title: 'To-do list app',
                    description: 'Create an angular application which is capable to CRUD operation of TO-DO',
                    dueDate: '22-02-2022',
                    remarks: 'Add more features to the app'
                },
                {
                    id: 3,
                    title: 'Test the app',
                    description: 'Test TO-DO list application',
                    dueDate: '22-02-2022',
                    remarks: 'NA'
                },
                {
                    id: 4,
                    title: 'Deploy',
                    description: 'Host TO-DO list app in github',
                    dueDate: '22-02-2022',
                    remarks: 'NA'
                }
            ];
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData') || '{}');
        }       
        return this.todos;
    }
    
    getTodoById(id: number): Todo {
        var todoArray = JSON.parse(localStorage.getItem('localData') || '{}');       
        console.log(todoArray);
        return todoArray
          .filter((todo: { id: number; }) => todo.id === id)
          .pop();
    }
  
    updateTodoById(todo: Todo): Todo {
        if (todo.id === 0) {                    
            var todoArray = JSON.parse(localStorage.getItem('localData') || '{}');
            var todoid = todoArray.length;
                todo.id = ++todoid;
                todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        } else {
            var todoSaveArray = JSON.parse(localStorage.getItem('localData') || '{}');
            for (var i in todoSaveArray) {
                if (todoSaveArray[i].id === todo.id) {
                    todoSaveArray[i] = todo;
                    localStorage.setItem('localData', JSON.stringify(todoSaveArray));
                }
            }
        }
        return todo;
    }
    
    deleteTodoDetail(id: any) {
       var todoArray = JSON.parse(localStorage.getItem('localData') || '{}');
        for (var i in todoArray) {
            if (todoArray[i].id === id) {
                todoArray.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(todoArray));  
            }
        }    
    };    
}
