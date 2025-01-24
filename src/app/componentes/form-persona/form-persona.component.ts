import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { PAjaxService } from '../../servicios/p-ajax.service';
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

  constructor(private peticion: PAjaxService, private ruta: Router) {
    this.persona.id = -1,
      this.textoBoton = "AÑADIR";
  }

  ngOnInit() {
    //const personaId = this.route.snapshot.params["id"]
  }

  onSubmit() {
    console.log("This.Persona", this.persona);
    this.peticion.insertar(this.persona).subscribe(datos => {
      this.ruta.navigate(["/"]);
    })

  }
}
