import { Injectable } from '@angular/core';
import { DifuntoModel } from './models/difunto.model';
import {  HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  db_url = 'https://final-giweb.firebaseio.com/';

  constructor(private _HttpClient: HttpClient) { }

  getAllUsuarios(){
    return this._HttpClient.get(this.db_url + 'difuntos.json').pipe(map(this.getAllUsuariosArreglo));
  }

  private getAllUsuariosArreglo(usuario: object){
    const usuarios: DifuntoModel[] = [];
    if(usuario === null){
      return[];
    }
    Object.keys(usuario).forEach(key =>{
      const usuario2: DifuntoModel = usuario[key];
      usuario2.id_difunto = key;
      usuarios.push(usuario2);
    });
    return usuarios; 
  }

  getUsuario(id){
    console.log(this.db_url + 'difuntos/' + id + '.json');
    return this._HttpClient.get(this.db_url + 'difuntos/' + id + '.json');
  }
  postUsuario(usuario : DifuntoModel){
    return this._HttpClient.post(this.db_url + 'difuntos/.json', usuario).pipe(
      map((res : any) =>{
        usuario.id_difunto = res.name;
        return usuario;
      })
    );
  }
  
  putUsuario(usuario: DifuntoModel){
    const usuarioTemporal = {
      ...usuario
    }
    delete usuarioTemporal.id_difunto;
    return this._HttpClient.put(this.db_url + 'difuntos/' + usuario.id_difunto + '.json', usuarioTemporal);
  }
}
