import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable() // És una classe que es podrà injectar. S'afegeix al mòdul dbz.module.ts
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        },
    ];

    get personajes(): Personaje[] { // Retornarà array de Personaje
        return [...this._personajes]; // El que fa els ... és separar els elements que porta el this._personajes i en crea un altre buit
    }

    constructor() {
        console.log('Servicio inicializado') // Aquest constructor es crida al main-page.component.ts
    }

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}