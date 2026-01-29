import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {

  baseUrl:string="https://jsonplaceholder.typicode.com/users"

  constructor (private http:HttpClient){}   //(HttpClient ----> dep injection)

  getProductsAPI(){
    return this.http.get(this.baseUrl)
  }
  
}
