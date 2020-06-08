import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './survey/login/login.component';
import { QuestionsListComponent } from './survey/questions-list/questions-list.component';
import { StatisticalDataComponent } from './survey/statistical-data/statistical-data.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'questions-list',
  component: QuestionsListComponent
},
{
  path: 'statistical-data',
  component: StatisticalDataComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
