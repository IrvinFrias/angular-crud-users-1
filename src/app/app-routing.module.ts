import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersPanelComponent} from "./users-panel/users-panel.component";
import {UsersFormComponent} from "./users-form/users-form.component";

const routes: Routes = [
  {path:'users', component: UsersPanelComponent},
  {path:'form', component: UsersFormComponent},
  {path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
