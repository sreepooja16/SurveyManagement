import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsListComponent } from './survey/questions-list/questions-list.component';
import { StatisticalDataComponent } from './survey/statistical-data/statistical-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './survey/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    LoginComponent,
    StatisticalDataComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
