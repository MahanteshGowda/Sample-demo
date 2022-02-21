import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'todo-list',
      pathMatch: 'full'
  },
  {
      path: 'todo-list',
      loadChildren: () => import('./components/todo-list/todo-list.module').then(module => module.TodoListModule)
  },
  {
      path: 'todo-detail',
      loadChildren: () => import('./components/todo-detail/todo-detail.module').then(module => module.TodoDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
