import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = []; // Amb l'input indiquem que aquests components viondran des del component pare

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService) {} 

}
