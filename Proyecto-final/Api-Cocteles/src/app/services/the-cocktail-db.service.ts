import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheCocktailDBService {
  
  // API_URL: string = "https://www.thecocktaildb.com/api/.php"
  constructor(private client: HttpClient) { }

  // location(id:number | string){

  //   return this.client.get(`${this.API_URL}/location/${id}`)
  // }

  // character(stringCocteles: number | string){
  //   return this.client.get(`${stringCocteles}`)
  // }
}
