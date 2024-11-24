import { Component, ChangeDetectionStrategy, model, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Festivo } from '../../../core/entidades/Festivo';
import { FestivoService } from '../../servicios/festivo.service';


@Component({
  selector: 'app-obtener',
  standalone: true,
  imports: [ReferenciasMaterialModule, FormsModule, NgxDatatableModule, MatSelectModule, CommonModule],
  templateUrl: './obtener.component.html',
  styleUrl: './obtener.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObtenerComponent {
  years: number[] = [];
  selectedYear: number | null = null;
  public festivos: Festivo[] = [];
  public columnas = [
    {name: "Festivo", prop: "festivo", width: 400},
    {name: "Fecha", prop: "fecha", width: 400}
  ];

  constructor(private festivoServicio:FestivoService, private cdr: ChangeDetectorRef){
  }

  public obtener(year:any) {
    this.festivoServicio.listar(year).subscribe({
      next: data => {
        console.log(data);
        this.festivos = [...data];
        this.cdr.markForCheck();
      },
      error: error => {
        window.alert(error.message);
      }
    })
  }

  ngOnInit(): void {
    const startYear = 1900;
    const currentYear = 3000;
    this.years = this.generateYears(startYear, currentYear);
    this.selectedYear = new Date().getFullYear();
    //this.obtener(this.selectedYear);
  }

  generateYears(start: number, end: number): number[] {
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    return years;
  }

  onYearChange(event: any):void {
    this.selectedYear = event.value;
    console.log('Selected year: ==> ' + this.selectedYear);

  }

  public validate() {
    this.obtener(this.selectedYear);
  }

}
