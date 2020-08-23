import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../servicio.service';
import { CementerioModel } from '../../models/cementerio.model';

@Component({
  selector: 'app-cementerios',
  templateUrl: './cementerios.component.html',
  styleUrls: ['./cementerios.component.css']
})
export class CementeriosComponent implements OnInit {

  cementerios = [
    {
      "nombre": "El apogeo",
      "ubicacion": "Carrera 76 #39 Sur27",
      "url_img": "https://www.jardinesdelapogeo.com/wp-content/uploads/2019/12/parque-1.jpg"
    },
    {
      "nombre": "Cementerio central",
      "ubicacion": "Cra. 20 #3780, Bogotá",
      "url_img": "https://www.eltiempo.com/files/article_main/uploads/2019/03/05/5c7f3cee55f83.jpeg"
    },
    {
      "nombre": "Cementerio Jardines La Inmaculada",
      "ubicacion": "Cl. 68 #11-41, Bogotá",
      "url_img": "https://lh3.googleusercontent.com/p/AF1QipOjNsudNGKyAXByP_PegKYCQ57HnHcbILZ8o6yg=s1600-w400"
    }
  ];
  constructor() {}
  ngOnInit(): void {
  }
}
