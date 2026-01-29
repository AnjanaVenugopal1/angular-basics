import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {


  // create a user variable
  users:any=[]

  constructor(private api:Apiservice){}

ngOnInit(): void {
  this.getProducts()
  
}

getProducts(){
  this.api.getProductsAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.users=res
      
    },

    error:(err:any)=>{
      console.log("Error in fetching"+err);
      
    }
  })
}

  

}
