import { Component, Input } from '@angular/core';
import { RickAndMortyServicesService } from '../services/rick-and-morty-services.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  // @Input() cardInfo: card = {
  //   title: 'Titulo Nuevo',
  //   text: 'Contenido Nuevo',
  //   button: 'Pulsar Nuvo',
  //   img:'img-nuevo'
  // };

 @Input() characterInfo:any

  constructor(private RMService: RickAndMortyServicesService) {}

  getCharacter(chNum: any) {
   const obs = this.RMService.character(chNum)
    obs.subscribe(
      response => {

      this.characterInfo = response
      console.log(response)
    },
    error => console.log(error)
     
    )
  }
}
