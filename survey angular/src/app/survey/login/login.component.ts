import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { LoginService } from '../login.service';
import { Questions } from '../questions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sign: string;
  errorMessage: string;
  username: string;
  password: string;
  currentBuyer: any;
  user: boolean;
  questions:Questions;
  //showErrorMessage= false;

  constructor( protected surveyService: SurveyService,
              protected loginService: LoginService,
              protected activatedRoute: ActivatedRoute,
              protected router: Router) { }

  ngOnInit(): void {
    this.errorMessage = "";
  }
  validate() {
    
    console.log("hii");
   
    if (this.sign == 'user') {
      this.surveyService
     
        .validateUser(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentBuyer = response;
            //this.surveyService.setBuyerAndBills(this.currentBuyer);
            console.log("h42i");
            console.log(this.currentBuyer);
           //let iId :number= this.currentBuyer.id;
            if (this.currentBuyer.id!=0) {
              this.loginService.loginUser(this.currentBuyer.id);
              sessionStorage.setItem('key', 'true');
              console.log(this.currentBuyer);
            console.log(this.currentBuyer.id);
           // console.log(this.currentBuyer.questions);
         
              this.router.navigate(['/questions-list']);
            }
          else   
           { 
              this.errorMessage = "Invalid Username/password";
            } 
          }
        );
    }
    if (this.sign == 'admin') {
      this.surveyService
     
        .validateAdmin(this.username, this.password)
        .subscribe(
          (response) => {
            this.currentBuyer = response;
            console.log(response);
            console.log(this.currentBuyer.length);
           
            console.log("h42i");
            if (this.currentBuyer.length!=0) {
              this.loginService.loginAdmin(this.currentBuyer.id);
             // sessionStorage.setItem('key', 'true');
              this.router.navigate(['statistical-data']);
            }
           else if(this.currentBuyer.length == 0)
           { 
              console.log("h22");
              this.errorMessage = "Invalid username/password";
            } 
          }
        );
    }
  }
}