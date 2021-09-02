import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [ // Les declaracions són els components que tindrem
        ContadorComponent
    ],
    exports: [ // Quines coses vull fer visibles fora d'aquest mòdul (s'utilitzaran)
        ContadorComponent
    ],
})
export class ContadorModule {}