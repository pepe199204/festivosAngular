import { Routes } from '@angular/router';
import { InicioComponent } from './features/componentes/inicio/inicio.component';
import { ValidarComponent } from './features/componentes/validar/validar.component';
import { ObtenerComponent } from './features/componentes/obtener/obtener.component';

export const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "validar", component: ValidarComponent},
  {path: "obtener", component: ObtenerComponent}
];
