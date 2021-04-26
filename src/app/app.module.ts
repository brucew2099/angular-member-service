import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberService } from './member.service';

import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberAddComponent,
    MemberEditComponent,
    MemberGetComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
