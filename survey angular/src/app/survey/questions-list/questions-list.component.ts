import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Questions } from '../questions';
import { Answers } from '../answers';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questions: Questions;
  //answers: Answers[] = null;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  userId: string;

answer:Answers;




  constructor(protected surveyService: SurveyService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    ) {
  /*    this.answer={
        inputId: 0,
        userId:'', 
        question1:'',
        question2:'',
        question3:'',
        question4:'',
        question5:'',
        question6:''   
       
      } */
     // console.log(this.answer);
     }
     

  ngOnInit(): void {
    this.surveyService.getAllQuestions().subscribe(
      (response:any)=>{
        console.log(response.data);
        this.questions = response;
      }
    );
  }
 addAnswers(){
 
      console.log("1");
     // this.activatedRoute.paramMap.subscribe(params => {
      //  let id: any = params.get('iId');
     console.log(this.question1)
     console.log("id");
    let mv:Answers = {     
       inputId:this.answer.inputId,
      userId: this.answer.userId,
      question1:this.answer.question1,
      question2:this.answer.question2,
      question3:this.answer.question3,
      question4:this.answer.question4,
      question5:this.answer.question5,
      question6:this.answer.question6
     };
  console.log(mv);

  this.surveyService.addAnswers(mv).subscribe(
  (response: any)=>{
    console.log("added:" + response);

}
      );
//});

} 
 }
