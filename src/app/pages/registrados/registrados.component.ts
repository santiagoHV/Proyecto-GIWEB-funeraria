import { Component, OnInit } from '@angular/core';
import { DifuntoModel } from '../../models/difunto.model';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-registrados',
  templateUrl: './registrados.component.html',
  styleUrls: ['./registrados.component.css']
})
export class RegistradosComponent implements OnInit {

  difunto: DifuntoModel[] = [];
  constructor(private _RestService: ServicioService) { 
    this._RestService.getAllUsuarios().subscribe((res: DifuntoModel[]) => 
      {
        this.difunto = res;
        console.log(res);
      })
  }

  ngOnInit(): void {
  }

}
