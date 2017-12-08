import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components//header/header.component';
import { EventComponent } from './components/event/event.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  { path: 'main', component: AppComponent },
  { path: 'auth/login', component: LogInComponent },
  { path: 'auth/signup', component: SignupComponent },
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
