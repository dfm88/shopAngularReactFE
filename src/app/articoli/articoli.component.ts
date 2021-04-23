import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli = [
    {
       "id": 5419768,
       "description": "Müller, Fruit Passion alla pesca & maracuja conf. 2x125 g",
       "label": "Euro 5,00 / kg ",
       "outOfStock": false,
       "productType": "GROCERY"
    },
    {
       "id": 5419542,
       "description": "Yomo, yogurt magro al caffè conf. 2x125 g",
       "label": "Euro 4,36 / kg ",
       "outOfStock": false,
       "productType": "GROCERY"
    },
    {
       "id": 5395306,
       "description": "Nestlè, Fruttolo Dessert gusto cioccolato e fior di latte conf. 4x62,5 g",
       "label": "Euro 7,80 / kg ",
       "outOfStock": false,
       "productType": "GROCERY"
    },
    {
       "id": 5846235,
       "description": "Hotos Feta barricata",
       "label": "Euro 16,62 / kg ",
       "outOfStock": false,
       "productType": "GROCERY"
    },
    {
       "id": 5398257,
       "description": "Yogurt Fage 0% Grassi 170g",
       "label": "Euro 8,16 / kg ",
       "outOfStock": false,
       "productType": "GROCERY"
    },
    {
       "id": 5402926,
       "description": "Nestlè, Mio yogurt cremoso all'albicocca conf. 2x125 g",
       "label": "Euro 5,96 / kg ",
       "outOfStock": false,
       "productType": "GROCERY"
    }
 ]
  
  constructor() { }



  ngOnInit(): void {
  }

}
