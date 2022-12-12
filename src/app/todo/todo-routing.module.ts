import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  { path: 'todo', redirectTo: 'todo/index', pathMatch: 'full'},
  { path: 'todo/index', component: IndexComponent },
  { path: 'todo/:todoId/view', component: ViewComponent },
  { path: 'todo/create', component: CreateComponent },
  { path: 'todo/:todoId/edit', component: EditComponent } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
