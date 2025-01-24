import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from "../modelos/persona";
@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
  private url: string = "http://localhost/AJAX/listaPersonas/servidor.php"
  constructor(private http: HttpClient) {

  }
  listar() {
    let cuerpo = {
      servicio: "listar"
    };
    //return this.http.post(this.url, cuerpo);
    return this.http.post<Persona[]>(this.url, cuerpo);
  }

  borrar(id: number) {
    let cuerpo = {
      servicio: "borrar",
      id: id
    };
    return this.http.post<Persona[]>(this.url, cuerpo);
  }

  añadir(id: number, dni: string, nombre: string, apellido: string) {
    
  }
}
