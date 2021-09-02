import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ // Les declaracions són els components que tindrem
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Quines coses vull fer visibles fora d'aquest mòdul (s'utilitzaran)
        ListadoComponent
    ],
    imports: [ // Mòduls que volem importar
        CommonModule, // El necessitarem molt si implementem característiques tipus *nfIf, *ngFor...
    ]
})
export class HeroesModule {}