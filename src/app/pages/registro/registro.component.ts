import { Component, OnInit } from '@angular/core';
import { DifuntoModel } from 'src/app/models/difunto.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  difunto: DifuntoModel = new DifuntoModel();
  id = null;
  error = false;

  constructor(private _activatedRoute: ActivatedRoute, private _servicio: ServicioService) { 
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if(this.id == 'new'){
      this.difunto.id_difunto = null;
    }else{
      //this._servicio.getUsuario(this.id).subscribe((res:DifuntoModel) => this.difunto = res)
      this.difunto.id_difunto = this.id;
    }
    console.log(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }
  guardar(form: NgForm){
  }

}
