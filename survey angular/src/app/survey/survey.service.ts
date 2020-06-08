import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Questions } from './questions';
import { Answers } from './answers';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
allUsers: User[];
  allAdmins: Admin[];
  currentBuyer: any;
  constructor(protected http: HttpClient) { 
  }


validateUser(username: string, password: string) {
  console.log("hi2i");
  let credentials = username + ':' + password;
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', credentials);
  console.log("h32i");
  return this.http.get("http://localhost:8182/login-service/login/user", { headers });

}
validateAdmin(username: string, password: string) {
  let credentials = username + ':' + password;
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', credentials);
  console.log("h32i");
  return this.http.get("http://localhost:8182/login-service/login/admin", { headers });

 
}
getAllQuestions() {
  return this.http.get("http://localhost:8182/login-service/login/question");
}
getStatistics1(){
  console.log("hello");
  console.log("hello");
 
  let username='abc'
    let password='abc'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>('http://localhost:8182/input-service/survey/survey/1',{headers});
  
    //const headers = new HttpHeaders({ Authorization: 'Basic'+btoa("abc"+":"+"abc") });
   // console.log("2");

  //return this.http.get("http://localhost:8182/input-service/survey/survey/"+1,{headers: headers});
 
}
getStatistics2(){
  console.log("hello");
  console.log("hello");
 
  let username='abc'
    let password='abc'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>('http://localhost:8182/input-service/survey/survey/2',{headers}); 
}
getStatistics3(){
  console.log("hello");
  console.log("hello");
 
  let username='abc'
    let password='abc'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>('http://localhost:8182/input-service/survey/survey/3',{headers}); 
}
getStatistics4(){
  console.log("hello");
  console.log("hello");
 
  let username='abc'
    let password='abc'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>('http://localhost:8182/input-service/survey/survey/4',{headers}); 
}
getStatistics5(){
  console.log("hello");
  console.log("hello");
 
  let username='abc'
    let password='abc'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>('http://localhost:8182/input-service/survey/survey/5',{headers}); 
}
getStatistics6(){
  console.log("hello");
  console.log("hello");
 
  let username='abc'
    let password='abc'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>('http://localhost:8182/input-service/survey/survey/6',{headers}); 
}
/*addAnswers(ans: Questions){
  // let size = this.allEmployees.length;
  return this.http.post("http://localhost:8076/api/employee", emp);
}  */
addAnswers(answer: Answers){
  // let size = this.allEmployees.length;
  let username='abc'
    let password='abc'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  console.log("hiii")
  return this.http.post("http://localhost:8182/input-service/survey/input", answer,{headers});
}
isLoggedIn(){
  return this.currentBuyer;
}
  }
