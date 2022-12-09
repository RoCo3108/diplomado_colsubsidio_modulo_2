import { Component, Input } from '@angular/core';
import { TheCocktailDBService } from '../services/the-cocktail-db.service';


@Component({
  selector: 'app-card-cocteles',
  templateUrl: './card-cocteles.component.html',
  styleUrls: ['./card-cocteles.component.css']
})
export class CardCoctelesComponent {


  // @Input() characterIn: any

  // constructor(private CTServices: TheCocktailDBService) { }

  // getCharacter(chNum: any) {
  //   const obs = this.CTServices.character(chNum)
  //   obs.subscribe(
  //     response => {

  //       this.characterIn = response
  //       console.log(response)
  //     },
  //     error => console.log(error)

  //   )
  // }

}

