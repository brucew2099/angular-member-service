import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MemberAddComponent} from './member-add/member-add.component';
import {MemberGetComponent} from './member-get/member-get.component';
import {MemberEditComponent} from './member-edit/member-edit.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { MemberDeleteComponent } from './member-delete/member-delete.component';

const routes: Routes = [
  {
    path: 'member/create',
    component:MemberAddComponent
  },
  {
    path: 'member/edit/:id',
    component:MemberEditComponent
  },
  {
    path: 'members',
    component:MemberGetComponent
  },
  {
    path: 'member/delete/:id',
    component:MemberDeleteComponent
  },
  {
    path: '404',
    component:NotfoundComponent
  },
  {
    path: '',
    component:MemberGetComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
