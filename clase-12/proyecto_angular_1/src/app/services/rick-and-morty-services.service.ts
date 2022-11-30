import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServicesService {

  API_URL: string = "https://rickandmortyapi.com/api"

  constructor(private client: HttpClient) {}

  location(id:number | string){

    return this.client.get(`${this.API_URL}/location/${id}`)
  }

  character(chPersonaje: number | string){
    return this.client.get(`${chPersonaje}`)
  }
}
