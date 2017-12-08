import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LogInComponent } from './components//log-in/log-in.component';
import { HeaderComponent } from './components//header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { EventComponent } from './components/event/event.component';

const routes: Routes = [
  { path: 'auth/login', component: LogInComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'main', component: AppComponent },
  { path: 'event/_id', component: EventComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignupComponent,
    HeaderComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
