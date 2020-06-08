import { Component, OnInit } from '@angular/core';
import { Options } from '../options';
import { SurveyService } from '../survey.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-statistical-data',
  templateUrl: './statistical-data.component.html',
  styleUrls: ['./statistical-data.component.css']
})
export class StatisticalDataComponent implements OnInit {
  options: Options;
  options1: Options;
  options2: Options;
  options3:Options;
  options4:Options;
  options5:Options;
  options6:Options;

  //options: Options[] = null;
  constructor( protected surveyService: SurveyService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router) { }

    
  ngOnInit(): void {
      console.log("hl1")
    this.surveyService.getStatistics1().subscribe(
      (response: any) => {
         console.log(response);
        this.options = response;
      
        
      }
    );
    this.surveyService.getStatistics2().subscribe(
      (response: any) => {
         console.log(response);
        this.options1 = response;
      }
      );
      this.surveyService.getStatistics3().subscribe(
        (response: any) => {
           console.log(response);
          this.options2 = response;
        
          
        }
      );
      this.surveyService.getStatistics4().subscribe(
        (response: any) => {
           console.log(response);
          this.options3 = response;
        
          
        }
      );
      this.surveyService.getStatistics5().subscribe(
        (response: any) => {
           console.log(response);
          this.options4 = response;
        
          
        }
      );
      this.surveyService.getStatistics6().subscribe(
        (response: any) => {
           console.log(response);
          this.options5 = response;
        
          
        }
      );

  }

}
