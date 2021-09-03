import { Component, Input, Output, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = { // Amb l'input indiquem que aquests components viondran des del component pare
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService ) {}

  // Output serveix per emetre events, creem un nou anomenat onNuevoPersonaje. de tipus EventEmitter<tipus d'event que es vol especificar> . Sempre especificar un tipus; en aquest cas -> Personaje
  // Output s'utilitza per enviar dades d'aquest component fill al pare, Input és del pare al fill
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  cambiarNombre( event:any ) {
    console.log(event)
  }

  agregar() {
    if( this.nuevo.nombre.trim().length === 0 ) { // Si està buit
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo)

    this.onNuevoPersonaje.emit(this.nuevo); // Emitim l'event creat en Output

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }


}
