import { Component, OnInit } from '@angular/core';
import { DifuntoModel } from 'src/app/models/difunto.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../servicio.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

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
    console.log("entro al constructor");
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if(this.id === 'new'){
      console.log("entro al if");
      this.difunto.id_difunto = null;
    }else{
      this._servicio.getUsuario(this.id).subscribe((res: DifuntoModel) => {
        this.difunto = res;
        this.difunto.id_difunto = this.id;
      });
    }
  }

  ngOnInit(): void {
  }
  guardar(form: NgForm){
    console.log(this.difunto);
   
    if (form.invalid){
       this.error = true;
       return;
     }
 
    Swal.fire({
     title: 'Espere',
     icon: 'info',
     text: 'Guardando Información',
     allowOutsideClick: false
     });
 
    Swal.showLoading();
    
 
    let peticion: Observable<any>
 
    if (this.difunto.id_difunto){
       this.error = false;
       peticion = this._servicio.putUsuario(this.difunto);
       
     }else{
       this.error = false;
       peticion= this._servicio.postUsuario(this.difunto);
     }
 
    peticion.subscribe(res =>{
       Swal.fire({
             title: this.difunto.nombre + ' ' + this.difunto.apellido,
             icon: 'success',
             text: 'Información guardada correctamente',
           });
         })
  }
  

}
