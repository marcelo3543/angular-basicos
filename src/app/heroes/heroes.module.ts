import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ //Son los componentes que conforman el modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent, //lo que hago publico para otros modulos
        HeroeComponent
    ],
    imports:[ //Aca van modulos
        CommonModule
    ]
})
export class HeroesModule{}