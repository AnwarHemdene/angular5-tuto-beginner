import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
{
  //home path, put nothing inside it
  path: '',
  component: HomeComponent
},
{
    //:id called route parameter
  path: 'about/:id',
  component: AboutComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
