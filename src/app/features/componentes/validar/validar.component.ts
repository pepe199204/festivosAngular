import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { FestivoServiceVerificar } from '../../servicios/festivoVerificar.service';
import { MatDialog } from '@angular/material/dialog';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-validar',
  standalone: true,
  imports: [ReferenciasMaterialModule, MatCardModule, MatDatepickerModule, MatGridListModule],
  templateUrl: './validar.component.html',
  styleUrl: './validar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidarComponent {
  selected = model<Date | null>(null);
  year: number | null = null;
  month: number | null = null;
  day: number | null = null;

  constructor(private festivoServicio:FestivoServiceVerificar, private cdr: ChangeDetectorRef, private dialogService: MatDialog){
  }

  public verificar(year:any, month: any, day: any) {
    this.festivoServicio.verificar(year, month, day).subscribe({
      next: data => {
        this.cdr.markForCheck();
        this.dialogService.open(MensajeComponent, {
          width: "500px",
          height: "300px",
          disableClose: true,
          data: {
            titulo: "Festivo Validado",
            result: data.mensaje
          }
        });
      },
      error: error => {
        this.dialogService.open(MensajeComponent, {
          width: "500px",
          height: "300px",
          disableClose: true,
          data: {
            titulo: "Festivo Validado",
            result: error.error.mensaje
          }
        });
      }
    })
  }

  ngOnInit(): void {
    //this.obtener(this.selectedYear);
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.day = new Date().getDate();
  }

  onDateChange(selectedDate:Date): void {
    this.year = selectedDate.getFullYear();
    this.month = selectedDate.getMonth() + 1;
    this.day = selectedDate.getDate();
    console.log(`selected date: ${this.year}-${this.month}-${this.day}`);
  }
  public validate() {
    console.log(`selected date: ${this.year}-${this.month}-${this.day}`);
    this.verificar(this.year,this.month,this.day);
  }
}
