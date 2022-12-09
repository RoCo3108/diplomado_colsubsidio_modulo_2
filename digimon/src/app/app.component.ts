import { Component, OnInit} from '@angular/core';
import { DigimonesService } from './services/digimones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  digimones:any;

  constructor(public digimon:DigimonesService){}

    ngOnInit(){
      this.digimon.getDigimones().subscribe(
        (Response) => {this.digimones =Response; console.log(Response)},
        (error) => {console.log(error)}
        )
      
    }
  
}
