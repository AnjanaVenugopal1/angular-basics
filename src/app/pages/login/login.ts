import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

email:string=""
password:string=""
user:any={}

login(){
  this.user=JSON.parse(sessionStorage.getItem('userDetails') || "")
  if(this.email===this.user.email){
    if(this.password===this.user.password){
    alert("Login Successfull!!")
  }
  else{
    alert("Paswword Mismatch!")
  }
}


else{
  alert("Invalid User!")

}
}
}



