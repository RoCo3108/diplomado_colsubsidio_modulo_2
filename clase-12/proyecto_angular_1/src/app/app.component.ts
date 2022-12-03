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
          this.cards = []
          this.getResidents()
    
       //this.getResidents()
      },
      error => {console.log(Response)} 
      )
  }


  getResidents() {
    console.log(this.locationInfo.residents);
    this.locationInfo.residents.forEach((elemento: string | any) => {
      const characterId = elemento.split("/")[5]
      const obs = this.RMService.character(elemento)
      obs.subscribe(
        response => { 
        this.cards.push(response)
        },
        (error: any) => console.log(error)
      )
    });
  }
}


