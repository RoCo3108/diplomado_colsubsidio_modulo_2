import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{


  title: string = "Card title"
  text:string = "Some quick example text to build on the card title and make up the bulk of the card's content"
  button: string = "Go somewhere"
  Card: Object[] = [
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content",
      button: "Go somewhere"
    },
    
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content",
      button: "Go somewhere"
    },
    {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content",
      button: "Go somewhere"
    },
    {
      title: "Card 2 title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content",
      button: "Go somewhere"
    },
    {
      title: "Card 3 title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content",
      button: "Go somewhere"
    },
     {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content",
      button: "Go somewhere"
    }
    ];
}
