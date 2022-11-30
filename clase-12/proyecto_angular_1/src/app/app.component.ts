import { Component } from '@angular/core';
import { RickAndMortyServicesService } from './services/rick-and-morty-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Diplomado Angular ';

  locationInfo: any

  cards:  any = [] 

  constructor(private RMService: RickAndMortyServicesService) {}
  

  getLocation(locationId: any) {
    const obs = this.RMService.location(locationId)
      obs.subscribe(
        response => {
        this.locationInfo = response
        this.locationInfo.residents.forEach((element:any) =>{
          // console.log(element)
          this.RMService.character(element)
          this.getResidents()
        }),
        console.log(response)
       //this.getResidents()
      },
      error => {console.log(Response)} 
      )
  }


  getResidents() {
    console.log(this.locationInfo.residents);
    this.locationInfo.residents.forEach((elemento: string)=>{
      const obs = this.RMService.character(elemento)
      obs.subscribe(
        response => { 
        this.cards.push(response)
        console.log(this.cards)
        },
        (error: any) => console.log(error)
      )
    });
  }
}


