import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { FestivoServiceVerificar } from '../../servicios/festivoVerificar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReferenciasMaterialModule, MatCardModule, MatDatepickerModule, MatGridListModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private router:Router){}

  redirectTo(route:string):void {
    this.router.navigate([route]);
  }

}
