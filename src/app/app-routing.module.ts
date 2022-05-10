import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DispalyComponent } from './dispaly/dispaly.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';

import { UserComponent } from './user/user.component';
const routes: Routes = [
{path:'login' ,component:LoginComponent,},
{ path: 'user', component: UserComponent},
{ path: 'table', component: TableComponent,
children:[{
path: 'dispaly/:id', component: DispalyComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }