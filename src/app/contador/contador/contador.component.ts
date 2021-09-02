import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <!-- Quan la variable està dins de comilles, no fa falta posar els {{}} -->
        <button (click)="acumular(+base)">+{{base}}</button> <!-- els () provoquen un event i el que va dins de les comilles, és codi de JS. Portem la funció del component -->

        <span>{{numero}}</span>

        <button (click)="acumular(-base)">-{{base}}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App'; // Servirà per passar-se variables als component.html posant {{title}}
    numero: number = 10;
    base: number = 5;
  
    acumular( valor: number ) {
      this.numero += valor;  
    }
}