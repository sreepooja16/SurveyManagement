import { Questions } from './questions';

export interface User{
    id:number,
    username: string,
  
    password: string,
    questions: Questions[]
    
   
}