import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

todos:any=[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },]



  // Dependency injection(access specifier var:classname)
  constructor(private route:Router){}

  // directives
  isStatus:boolean=true

 

  // string interpolation
  dataBinding:string = "Angular Basics"
  version:Number = 20

  // property binding
  imgUrl: string="https://th.bing.com/th/id/OIP.pKpxfBySp3yZ6RJZRKYDcQHaFj?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

  // event binding
  btnClick(){
    // alert("Welcome!!")
    this.route.navigateByUrl('/login')
  }

  // event binding using $event

  getDetails(event:any){
    console.log(event?.target.value);
    
  }

  //  template reference variable 

   getName(name:any){
    console.log(name.value);
}
}
