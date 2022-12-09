import { Component } from '@angular/core';
import { TheCocktailDBService } from './services/the-cocktail-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api-Cocteles';

  // locationIn: any

  // cocteles:  any = [] 

  constructor() {}
  // private CTServices: TheCocktailDBService  esto va en el constructor

//   getLocation(locationId: any) {
//     const obs = this.CTServices.location(locationId)
//       obs.subscribe(
//         response => {
//           this.locationIn = response
//           this.cocteles= []
//           this.getCocteles()
    
//       },
//       error => {console.log(Response)} 
//       )
// }

// getCocteles() {
//   console.log(this.locationIn.idDrink);
//   this.locationIn.idDrink.forEach((elemento: string | any) => {
//     const characterId = elemento.split("/")[5]
//     const obs = this.CTServices.character(elemento)
//     obs.subscribe(
//       response => { 
//       this.cocteles.push(response)
//       },
//       (error: any) => console.log(error)
//     )
//   });
// }

}
