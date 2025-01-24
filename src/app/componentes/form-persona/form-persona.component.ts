import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  standalone: false,

  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {
  public persona: Persona = <Persona>{};
  public textoBoton: string;

  constructor() {
    this.persona = {
      ID: -1,
      DNI: "",
      NOMBRE: "",
      APELLIDOS: ""
    }
    this.textoBoton = "AÑADIR";
  }

  ngOnInit() {
    //const personaId = this.route.snapshot.params["id"]
  }

  onSubmit() {

  }
}
